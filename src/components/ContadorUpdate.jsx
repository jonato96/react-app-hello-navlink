import { useState } from "react"

const Counter = () =>{
    const [counter, setCounter] = useState(0)
    const handleClick = () => setCounter(counter + 1)
    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleClick}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <button onClick={() => setCounter(0)}>reset</button>

        </div>
    )
}
export default Counter;