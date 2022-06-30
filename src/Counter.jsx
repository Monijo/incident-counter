import React from 'react';
import {useCounter} from "./useCounter";
import SetCounter from "./SetCounter";

function Counter(props) {
    const incident= "incident";
    const {count, increment, decrement, set} = useCounter()


    return (
        <div>
            <h1>Days since last {incident}</h1>
            <p>{count}</p>
            <section>
                <button onClick={()=>increment()}>Increment</button>
                <button onClick={()=>set(0)}>Reset</button>
                <button onClick={()=>decrement()}>Decrement</button>
            </section>
            <SetCounter/>
        </div>
    );
}

export default Counter;
