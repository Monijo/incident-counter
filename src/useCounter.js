import {useSelector} from "react-redux";
import {useMemo} from "react";
import {useActions} from "./useActions";
import {decrement, increment, set} from "./actions";

export const useCounter = ()=>{
    const count =useSelector((state)=>state.count)
    const actions = useActions({increment, decrement, set})
    return useMemo(()=>{
            return {count, ...actions}
    }, [count, actions])
}
