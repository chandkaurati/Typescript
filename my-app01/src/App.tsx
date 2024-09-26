import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './componants/users'
import Card from './componants/Card'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState<Boolean>(true)
  return (
    <>
    <h2>hii tis is chnad</h2>
    <Card/>
    {/* <UserList/> */}
    </>
  )
}

export default App
