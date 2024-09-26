import React, { useState } from "react";



const Card = ()=>{
const [text , setText] = useState<string>("default value")

const ChangeText = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value)
}
return (
    <>
   <h1>{text}</h1>
   <input type="text " value={text} onChange={(e)=> ChangeText(e)}/>
    </>
)

}

export default Card
