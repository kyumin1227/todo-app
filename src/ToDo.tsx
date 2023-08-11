import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "./atoms";

function ToDo({ text, category, id }: IToDo) {

    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("I want to going ", event.currentTarget.name);
    };

    return (
        <li>
            <span>{ text }</span>
            {category !== "TO_DO" ? <button name="TO_DO" onClick={onClick}>TO_DO</button> : null}
            {category !== "DOING" ? <button name="DOING" onClick={onClick}>DOING</button> : null}
            {category !== "DONE" ? <button name="DONE" onClick={onClick}>DONE</button> : null}
        </li >
    )
}

export default ToDo;