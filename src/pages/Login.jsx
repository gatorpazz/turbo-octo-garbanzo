import { useState } from 'react';
import { loginUser } from '../API';

const Login = ({setToken}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    const token = await loginUser(username, password);
    setToken(token);
    localStorage.setItem('token', token);
  }
  return (
    <div>
      <h1>Login</h1>
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
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;