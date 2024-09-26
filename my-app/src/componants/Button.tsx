import React, { useEffect, useState } from 'react'
import { useCount } from '../context/userContext'

interface buttonProops{
  title : string,
  handleClick?: ()=> void
}



const Button: React.FC<buttonProops> = (props, handleClick)=>{

  const context = useCount()
     return (
        <>
        <h1>{context?.value}</h1>
         <button onClick={()=> context?.setValue(context.value + 1)}>{props.title}</button>
        </>
     )
}

export default Button