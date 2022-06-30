import React, {useEffect, useState} from 'react';
import {useCounter} from "./useCounter";

function SetCounter(props) {
    const {count: countFromStore, set} = useCounter()
    const [count, setCount] = useState(0)


    useEffect(()=>{
        setCount(countFromStore)
    }, [countFromStore])

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                set(count)
            }}>
                <label htmlFor="set-to">Set count</label>
                <input type="number" id="set-to" value={count} onChange={(e) => setCount(
                    parseInt(e.target.value || 0)
                )}/>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default SetCounter;
