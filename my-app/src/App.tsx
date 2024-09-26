import React, { FormEvent, FormEventHandler, useContext, useState } from 'react'
import './App.css'
import Button from './componants/Button'
import { useCount } from './context/userContext'
import {CounterProvider} from './context/userContext'
import Counter from './componants/Counter'

interface MyappProps {
    childeren?: React.ReactNode;
    style? : React.CSSProperties
}

function App(props:MyappProps) {
  // const [count, setCount] = useState<number>(0)
  const [name, setName] = useState<string>("")
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
      e.preventDefault()
      setName(e.target.value)
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
     e.preventDefault()
     alert(name)
  }
  return (
     <> 
    <CounterProvider>
      <Button title='click'/>
    
    <Counter Timer={300}/>
    </CounterProvider>
     </>
  )
}

export default App
