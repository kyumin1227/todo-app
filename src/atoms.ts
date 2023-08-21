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

// 현재 지정 category를 저장하는 state로 enum값을 이용
export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
})

// toDo들의 값을 저장하는 state
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
})

// Selector는 atom을 받아서 변형
export const toDoSelector = selector({
  key: "toDoSelector",
  // toDos와 category의 값을 받아 해당 값이 변경되면 selector의 값이 자동으로 리렌더링
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    // filter를 통해 카테고리별로 구분
    return toDos.filter((toDo) => toDo.category === category);
  }
})