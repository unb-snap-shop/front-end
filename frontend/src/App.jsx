import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './views/HomePage' 
import Cart from './views/Cart'
import Navbar from './components/navbar/Navbar'

// import AboutPage

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cart" element={<Cart/>}/>


      </Routes>
    </Router>
  )
}

export default App
