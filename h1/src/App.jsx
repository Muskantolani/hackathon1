import { useState } from 'react'
import './App.css'
import { Vendor } from './components/Vendor'
import Sidebar from './components/Sidebar'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Vendor/> 
      <Sidebar/> 
      <Contact />
    </>
  )
}

export default App;
