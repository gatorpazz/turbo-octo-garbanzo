import { Routes, Route } from 'react-router-dom'
import './App.css'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Posts from './pages/Posts'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
