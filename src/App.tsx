import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


function App() {

    const onDragEnd = () => {

    }

    return <DragDropContext onDragEnd={onDragEnd}>
        {/* 드래그 앤 드롭을 위해 영역을 감쌈 */}
        {/* DagDropContext는 반드시 한 개 이상의 자식을 가져야 함 */}
        <Droppable droppableId="one">
            {/* 무언가를 드래그 드롭을 하는 영역 */}
            {/* Droppable은 반드시 함수로 만들어진 한 개 이상의 자식을 가져야 함 */}
            {(provided) => <ul ref={provided.innerRef} {...provided.droppableProps}>
                <Draggable draggableId="first" index={0}>
                    {/* Droppable 영역 안에서 드래그 하는 영역 */}
                    {/* Draggable은 반드시 함수로 만들어진 한 개 이상의 자식을 가져야 함 */}
                    {(provided) => <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}>
                        {/* dragHandleProps = 이동하기 위해 토글 할 요소 
                        즉 아래와 같이 코드를 짜면 🔥만 토글 가능
                        draggableProps = 이동시킬 요소 */}
                        <span {...provided.dragHandleProps}>🔥</span>
                        One
                    </li>}
                </Draggable>
                <Draggable draggableId="second" index={1}>
                    {(provided) => <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}>
                        <span {...provided.dragHandleProps}>🔥</span>
                        Two
                    </li>}
                </Draggable>
            </ul>}
        </Droppable>
    </DragDropContext>;
}

export default App;