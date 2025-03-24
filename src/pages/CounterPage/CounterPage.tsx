import { useState } from "react";
import NavigateBackButton from "../../components/NavigateBackButton/NavigateBackButton";

const CounterPage = () => {
    const [counter, setCounter] = useState(0);

    const showALog = (num: Number) => {
        console.log(`Number now is:`, num);
    } 

    return (
        <div>
            <NavigateBackButton />
            {`Hello to my CounterPagelication, let's count clicks: ${counter}`}
            <button onClick={() => {
                setCounter(prev => prev + 1 )
            }}>Add</button>

            <button onClick={() => showALog(counter)}>SHOW LOG</button>
        </div>
    )
}

export default CounterPage;