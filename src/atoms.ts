import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
  id: number;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
})

// Selector는 atom을 받아서 변형
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    // filter를 통해 카테고리별로 구분
    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  }
})