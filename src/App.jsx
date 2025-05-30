import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import AddBlog from './components/AddBlog'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="homepage" element={<HomePage/>}/>
        <Route path="addblog" element={<AddBlog/>}/>
      </Routes>
    </>
  )
}

export default App
