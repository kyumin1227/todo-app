import React, { useState } from "react";
import { useForm } from "react-hook-form";

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

interface IFormData {
    email: string,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    passwordCheck: string,
    extraError?: string,
  
}

function ToDoList() {
  // register = onChange, onSubmit을 대체
  // watch = register 값을 추적 및 확인
  // handleSubmit = submit 함수
  // formState: {errors} = error들을 담고있는 오브젝트로 출력 시 에러를 표시
  // setError = error를 수동으로 설정
  const { register, /* watch, */ handleSubmit, formState: {errors}, setError } = useForm<IFormData>();

  // data가 유효한 경우에만 호출
  const onValid = (data: IFormData) => {
    if (data.password !== data.passwordCheck) {
      // passwordCheck에 해당 메세지의 에러를 설정
      setError(
        "passwordCheck",
        { message: "Password are not the same" },
        { shouldFocus: true },
      );
    }
    // setError("extraError", { message: "Server offline" });
  }

  console.log(errors);
  
  return (
    <div>
      <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
        <input {...register("email", {
          required: "Write here",
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
            message: "Only naver.com emails allowed"
          }
        })} placeholder="Email" />
        <span>{errors?.email?.message as string}</span>
        <input {...register("firstName", {required: "Write here"})} placeholder="First Name" />
        <span>{errors?.firstName?.message as string}</span>
        <input {...register("lastName", {required: "Write here"})} placeholder="Last Name" />
        <span>{errors?.lastName?.message as string}</span>
        <input {...register("username", {
          required: "Write here", minLength: 10,
          // value를 전달 후 조건을 만족하면 true 만족하지 않으면 false 반환
          // 만약 string을 반환할 경우에는 false로 인식되며 해당 string을 error 메세지로 보여줌
          validate: {
            noKyumin: (value) => value.includes("kyumin") ? "No kyumin allowed" : true,
            noNick: (value) => value.includes("nick") ? "No nick allowed" : true,
          }
        })} placeholder="Username" />
        <span>{errors?.username?.message as string}</span>
        <input {...register("password", {
          required: "Password is required!", minLength: {
            value: 5,
            message: "Your password is too short."
        }})} placeholder="Password" />
        <span>{errors?.password?.message as string}</span>
        <input {...register("passwordCheck", {required: "Write here", minLength: {
            value: 5,
            message: "Your password is too short."
        }})} placeholder="PasswordCheck" />
        <span>{errors?.passwordCheck?.message as string}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message as string}</span>
      </form>
    </div>
  );
}

export default ToDoList;