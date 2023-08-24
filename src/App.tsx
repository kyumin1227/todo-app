import {useState} from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";


function App() {

    const [minutes, setMinutes] = useRecoilState(minuteState);
    // 첫번째 인자 : selector의 get 값
    // 두번째 인자 : selector의 set을 설정하는 함수
    const [hours, setHours] = useRecoilState(hourSelector);

    const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
        // +는 string을 number로 변경해줍니다.
        setMinutes(+event.currentTarget.value);
    }

    const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
        setHours(+event.currentTarget.value);
    }
    
    return <div>
        <input onChange={onMinutesChange} value={minutes} type="number" placeholder="Minutes" />
        <input onChange={onHoursChange} value={hours} type="number" placeholder="Hours" />
    </div>;
}

export default App;