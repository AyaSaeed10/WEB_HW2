import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(res => res.text())
      .then(data => console.log("From server:", data))
      .catch(err => console.error(err))
  }, [])

  return (
    
      <div>Hello Team</div>
  )
}

export default App
