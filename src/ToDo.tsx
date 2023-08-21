import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "./atoms";

function ToDo({ text, category, id }: IToDo) {

    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: {name} } = event;
        console.log("I want to going ", name);
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
            console.log(targetIndex);
            const oldToDo = oldToDos[targetIndex];
            // as any로 typescript의 식별자 확인을 피할 수 있지만 권장되는 방법은 아님
            const newToDo = { text, id, category: name as any };

            console.log("oldToDo: ", oldToDo, "newToDo: ", newToDo);
            
            // 타겟의 앞과 뒤에는 원본을 가져오고 타겟만 변경
            return [
                ...oldToDos.slice(0, targetIndex), // 타겟의 앞부분 (원본)
                newToDo, // 수정본
                ...oldToDos.slice(targetIndex + 1), // 타겟의 뒷부분 (원본)
            ];
        })
    };

    return (
        <li>
            <span>{ text }</span>
            {category !== Categories.TO_DO ? <button name={Categories.TO_DO} onClick={onClick}>TO_DO</button> : null}
            {category !== Categories.DOING ? <button name={Categories.DOING} onClick={onClick}>DOING</button> : null}
            {category !== Categories.DONE ? <button name={Categories.DONE} onClick={onClick}>DONE</button> : null}
        </li>
    )
}

export default ToDo;