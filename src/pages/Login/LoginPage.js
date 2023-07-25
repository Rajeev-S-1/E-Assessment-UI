import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom'



const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    navigate('/home')
  };

  return (
    <div className="container">
      <LoginForm
        username={username}
        password={password}
        onUsernameChange={handleUsernameChange}
        onPasswordChange={handlePasswordChange}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default LoginPage;
