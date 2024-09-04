import { useState } from 'react'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <h1>Main Page</h1>
      <Signup />
      <Login />


    </>
  )
}

export default App
