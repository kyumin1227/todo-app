import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IToDo, categoryState, toDoState } from "./atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
    
  const { register, handleSubmit, setValue, formState: {errors} } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

    const handleValid = (data: IForm) => {
    console.log("add to do", data);
    
    // ...은 해당 배열의 엘리먼트만 복사해서 배열에 붙여넣음
    setToDos((prev) => [{text: data.toDo, category, id: Date.now()}, ...prev]);

    // form을 submit 한 후 설정할 값
    // 아래의 경우에는 toDo의 값이 제출 후에 "" 로 설정됨
    setValue("toDo", "");
    
  }

    return (
        <form onSubmit={handleSubmit(handleValid)}>
        <input {...register("toDo", { required: "Please write a To Do" })} placeholder="Write a to do" />
        <span>{errors.toDo?.message}</span>
        <button>Add</button>
      </form>
    )
}

export default CreateToDo;