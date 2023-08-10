import { IToDo } from "./atoms";

function ToDo({text}: IToDo) {
    return (
        <li>
            { text }
            <button>TO_DO</button>
            <button>DOING</button>
            <button>DONE</button>
        </li >
    )
}

export default ToDo;