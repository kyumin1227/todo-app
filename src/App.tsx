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
            {() => <ul>
                <Draggable draggableId="first" index={0}>
                    {/* Droppable 영역 안에서 드래그 하는 영역 */}
                    {/* Draggable은 반드시 함수로 만들어진 한 개 이상의 자식을 가져야 함 */}
                    {() => <li>One</li>}
                </Draggable>
                <Draggable draggableId="second" index={1}>
                    {() => <li>Two</li>}
                </Draggable>
            </ul>}
        </Droppable>
    </DragDropContext>;
}

export default App;