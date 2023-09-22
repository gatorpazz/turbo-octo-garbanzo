import { useState } from 'react';
import { registerUser } from '../API';

const Register = ({setToken}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    const token = await registerUser(username, password);
    setToken(token);
    localStorage.setItem('token', token);
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register;