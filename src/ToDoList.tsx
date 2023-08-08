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

function ToDoList() {
  // register = onChange, onSubmit을 대체
  // watch = register 값을 추적 및 확인
  // handleSubmit = submit 함수
  const { register, /* watch, */ handleSubmit, formState } = useForm();

  // data가 유효한 경우에만 호출
  const onValid = (data: any) => {
    console.log(data);
  }

  console.log(formState.errors);
  
  return (
    <div>
      <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
        <input {...register("Email", {required: true})} placeholder="Email" />
        <input {...register("First-Name", {required: true})} placeholder="First Name" />
        <input {...register("Last-Name", {required: true})} placeholder="Last Name" />
        <input {...register("Username", {required: true, minLength: 10})} placeholder="Username" />
        <input {...register("Password", {
          required: "Password is required!", minLength: {
            value: 5,
            message: "Your password is too short."
        }})} placeholder="Password" />
        <input {...register("Password1", {required: true, minLength: 5})} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;