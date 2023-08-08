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
    email?: {
      message: string
    },
    firstName?: {
      message: string
    },
    lastName?: {
      message: string
    },
    username?: {
      message: string
    },
    password?: {
      message: string
    },
    passwordCheck?: {
      message: string
    }
  
}

function ToDoList() {
  // register = onChange, onSubmit을 대체
  // watch = register 값을 추적 및 확인
  // handleSubmit = submit 함수
  const { register, /* watch, */ handleSubmit, formState: {errors} } = useForm();

  // data가 유효한 경우에만 호출
  const onValid = (data: IFormData) => {
    console.log(data);
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
        <input {...register("username", {required: "Write here", minLength: 10})} placeholder="Username" />
        <span>{errors?.username?.message as string}</span>
        <input {...register("password", {
          required: "Password is required!", minLength: {
            value: 5,
            message: "Your password is too short."
        }})} placeholder="Password" />
        <span>{errors?.password?.message as string}</span>
        <input {...register("passwordCheck", {required: "Write here", minLength: 5})} placeholder="PasswordCheck" />
        <span>{errors?.passwordCheck?.message as string}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;