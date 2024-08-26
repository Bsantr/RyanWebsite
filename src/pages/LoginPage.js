import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'bsantr' && password === 'Sml12345') {
      navigate('/documents');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      {/* Restored Back Button */}
      <div className="back-button-container">
        <button onClick={handleBackClick} className="back-button">
          &larr; Back
        </button>
      </div>
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
