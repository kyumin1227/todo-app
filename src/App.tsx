import {useState} from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";


function App() {

    const [minutes, setMinutes] = useRecoilState(minuteState);
    const hours = useRecoilValue(hourSelector);

    const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
        // +는 string을 number로 변경해줍니다.
        setMinutes(+event.currentTarget.value);
    }
    
    return <div>
        <input onChange={onMinutesChange} value={minutes} type="number" placeholder="Minutes" />
        <input value={hours} type="number" placeholder="Hours" />
    </div>;
}

export default App;