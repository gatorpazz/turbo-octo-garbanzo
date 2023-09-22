import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Posts from './pages/Posts'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))
  return (
    <div>
      <Routes>
        <Route path="/" element={<Posts token={token}/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
      </Routes>
    </div>
  )
}

export default App
