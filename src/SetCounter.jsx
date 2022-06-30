import React from 'react';

function SetCounter(props) {
    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault()
            }}>
                <label htmlFor="set-to">Set count</label>
                <input type="number" id="set-to"/>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default SetCounter;
