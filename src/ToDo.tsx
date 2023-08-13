import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "./atoms";

function ToDo({ text, category, id }: IToDo) {

    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: {name} } = event;
        console.log("I want to going ", name);
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
            console.log(targetIndex);
            const oldToDo = oldToDos[targetIndex];
            const newToDo = { text, id, category: name };

            console.log("oldToDo: ", oldToDo, "newToDo: ", newToDo);
            
            
            return oldToDos;
        })
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