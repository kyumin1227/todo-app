import { atom, selector } from "recoil";

export const minuteState = atom({
    key: "minutes",
    default: 0,
})

export const hourSelector = selector<number>({
    key: "hours",
    // get = 다른 atom의 값을 가져옴
    get: ({ get }) => {
        const minutes = get(minuteState);
        return minutes / 60;
    },
    // set = 다른 atom의 값을 설정함
    // newValue의 값은 해당 함수를 실행시키는 곳에서 인자로 전달함
    set: ({ set }, newValue) => {
        const minutes = Number(newValue) * 60;
        set(minuteState, minutes);
    },
})