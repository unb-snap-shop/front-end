import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './views/HomePage' 
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
// import AboutPage

function App() {
  const [count, setCount] = useState(0)

  return (
    <Navbar/>
    //<HomePage/>
  )
}

export default App
