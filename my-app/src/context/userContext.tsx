import React, { createContext, useContext, useState } from "react";

const UserContext = createContext<CounterContextValue | null >(null)

interface CounterProviderProps {
 children : React.ReactNode
}

interface CounterContextValue {
     value : number
     setValue: (num : number)=> void
}

export const useCount = ()=>{
     return useContext(UserContext)
}

export const CounterProvider: React.FC<CounterProviderProps> = (props)=>{
       const [count, setCount] = useState<number>(1)
    return (
        <UserContext.Provider value={{
             value : count,
             setValue : setCount,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}