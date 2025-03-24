import { useState } from "react";

const App = () => {
    const [counter, setCounter] = useState(0);

    const showALog = (num: Number) => {
        console.log(`Number now is:`, num);
    } 

    return (
        <div>
            {`Hello to my application, let's count clicks: ${counter}`}
            <button onClick={() => {
                setCounter(prev => prev + 1 )
            }}>Add</button>

            <button onClick={() => showALog(counter)}>SHOW LOG</button>
        </div>
    )
}

export default App;