import { atom, selector } from "recoil";

// enum은 문자처럼 보이지만 사실 배열처럼 숫자로 작동
// 하지만 enum의 뒤에 = 을 통해 타입을 지정해 줄 수 있음
// 즉 "TO_DO", 로 두면 숫자로 작동하지만 아래와 같이 "TO_DO" = "TO_DO"로 입력하면
// 뒤에 작성한 "TO_DO"로 작동
export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  category: Categories;
  id: number;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
})

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
})

// Selector는 atom을 받아서 변형
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    // filter를 통해 카테고리별로 구분
    return toDos.filter((toDo) => toDo.category === category);
  }
})