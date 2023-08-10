import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";


interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
  id: number;
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
})

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors}
  } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log("add to do", data);
    
    // ...은 해당 배열의 엘리먼트만 복사해서 배열에 붙여넣음
    setToDos((prev) => [{text: data.toDo, category: "TO_DO", id: Date.now()}, ...prev]);

    // form을 submit 한 후 설정할 값
    // 아래의 경우에는 toDo의 값이 제출 후에 "" 로 설정됨
    setValue("toDo", "");
    
  }
  console.log(toDos);


  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input {...register("toDo", { required: "Please write a To Do" })} placeholder="Write a to do" />
        <span>{errors.toDo?.message}</span>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => <li key={toDo.id}>{toDo.text}</li>)}
      </ul>
    </div>
  )
}

// react-hook-form 사용 전 코드

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDoError("");
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError("To Do should be longer");
//     }
//     console.log(toDo);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>
//         {toDoError === "" ? null : toDoError}
//       </form>
//     </div>
//   );
// }

// react-hook-form 연습 코드

// interface IFormData {
//     email: string,
//     firstName: string,
//     lastName: string,
//     username: string,
//     password: string,
//     passwordCheck: string,
//     extraError?: string,
  
// }

// function ToDoList() {
//   // register = onChange, onSubmit을 대체
//   // watch = register 값을 추적 및 확인
//   // handleSubmit = submit 함수 (data가 유효할 때 다른 함수를 받을 수 있음)
//   // formState: {errors} = error들을 담고있는 오브젝트로 출력 시 에러를 표시
//   // setError = error를 수동으로 설정
//   const { register, /* watch, */ handleSubmit, formState: { errors }, setError } = useForm<IFormData>({
//     defaultValues: {
//     email: "@naver.com",
//     },
//   });

//   // data가 유효한 경우에만 호출
//   const onValid = (data: IFormData) => {
//     if (data.password !== data.passwordCheck) {
//       // passwordCheck에 해당 메세지의 에러를 설정
//       setError(
//         "passwordCheck",
//         { message: "Password are not the same" },
//         { shouldFocus: true },
//       );
//     }
//     // setError("extraError", { message: "Server offline" });
//   }

//   console.log(errors);
  
//   return (
//     <div>
//       <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
//         <input {...register("email", {
//           required: "Write here",
//           pattern: {
//             value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//             message: "Only naver.com emails allowed"
//           }
//         })} placeholder="Email" />
//         <span>{errors?.email?.message as string}</span>
//         <input {...register("firstName", {required: "Write here"})} placeholder="First Name" />
//         <span>{errors?.firstName?.message as string}</span>
//         <input {...register("lastName", {required: "Write here"})} placeholder="Last Name" />
//         <span>{errors?.lastName?.message as string}</span>
//         <input {...register("username", {
//           required: "Write here", minLength: 10,
//           // value를 전달 후 조건을 만족하면 true 만족하지 않으면 false 반환
//           // 만약 string을 반환할 경우에는 false로 인식되며 해당 string을 error 메세지로 보여줌
//           validate: {
//             noKyumin: (value) => value.includes("kyumin") ? "No kyumin allowed" : true,
//             noNick: (value) => value.includes("nick") ? "No nick allowed" : true,
//           }
//         })} placeholder="Username" />
//         <span>{errors?.username?.message as string}</span>
//         <input {...register("password", {
//           required: "Password is required!", minLength: {
//             value: 5,
//             message: "Your password is too short."
//         }})} placeholder="Password" />
//         <span>{errors?.password?.message as string}</span>
//         <input {...register("passwordCheck", {required: "Write here", minLength: {
//             value: 5,
//             message: "Your password is too short."
//         }})} placeholder="PasswordCheck" />
//         <span>{errors?.passwordCheck?.message as string}</span>
//         <button>Add</button>
//         <span>{errors?.extraError?.message as string}</span>
//       </form>
//     </div>
//   );
// }

export default ToDoList;