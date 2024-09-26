import React, { useEffect, useLayoutEffect, useReducer, useRef, useState }  from "react";


const initialState = {count : 0}

interface ACTIONTYPE {
     num : number,
     type : string
}

function reducer(state : typeof initialState, action : ACTIONTYPE){
    switch (action.type) {
        case "increment":
           return {count : state.count + action.num} 
        case "decrement":
        return {count : state.count - action.num}
        default:
        return state
    }
}

interface CounterProps {
     Timer?: number 
}

function Counter(props : CounterProps){
 const [state, disPatch ] = useReducer(reducer, initialState)
 const [greet, setGreet] = useState("")
 const inputRef = useRef<HTMLInputElement>(null)
 const {Timer} = props
 useEffect(()=> {
    setTimeout(() => {
    setGreet("hello chand")  
    // inputRef.current?.focus()  
    }, Timer);
 }, [Timer])
     return (
        <>
        <div>{state.count}</div>
        <div>{greet}</div>
        <button onClick={()=> disPatch({type: "increment", num : 5})}>increse</button>
         
        <input ref={inputRef} onFocus={()=> {}} type="text" />
        </>
     )
}

export default Counter