import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Posts</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
      </Routes>
    </div>
  )
}

export default App
