let store =[]
const MAGIC ="MAGIC"


function reducer(state, action){
    if(action.type === MAGIC){
        return [...state, action.payload]
    }
    return state
}


function dispatch(action){
    if(typeof action === "function"){
        action(dispatch) //rekurencja
    }else{
        store = reducer(store, action)
    }
}


const action1 = {
    type: MAGIC,
    payload: {answer: 42}
}


dispatch(action1)
dispatch(action1)
dispatch(action1)
console.log(store)


const doMagic =(dispatch_)=>{
    setTimeout(()=>{
        dispatch_({
            type: MAGIC,
            payload: {magic: false}
        })

    }, 100)

}

dispatch(doMagic)
console.log(store)

setTimeout(()=>{
    console.log(store)
}, 300)

// const upper = (text) =>{
//     return text[0].toUpperCase() +text.slice(1)
// }
//
// const revers= (text)=>{
//     return text.split("").reverse().join("")
// }
//
// const createSentence = (fn, text)=>{
//     return fn(text)
// }
// console.log(createSentence(revers("roman"), upper ))
// console.log(createSentence(upper,"roman" ))

// function notThunk (){
//     return function thunk(){
//         return
//     }
// }
