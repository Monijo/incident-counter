import React, {useEffect, useState} from 'react';
import {endpoint} from "../endpoint";
import {ERROR, RESPONSE_COMPLETE} from "../actionTypes";


const Search =React.memo(({dispatch}) => {
    const [query,setQuery] = useState("")


    useEffect(()=>{
        const controller = new AbortController();
        const {signal} = controller
        if(query.length > 3 ){
            fetch(endpoint +"/search/" + query, {signal})
                .then((response)=>response.json())
                .then((response)=>{
                    dispatch({
                        type: RESPONSE_COMPLETE,
                        payload: {result: response.characters}
                    })
                })
                .catch((error)=>{
                    dispatch({
                        type: ERROR,
                        payload: {error}
                    })
                })
            return ()=>{
                controller.abort()
            }

        }

    },[query, dispatch])

    return (
        <div>
            <input type="search"
            placeholder="Search here"
                   value={query}
                   onChange={(e)=> setQuery(e.target.value)}
            />
        </div>
    );
})

export default Search;
