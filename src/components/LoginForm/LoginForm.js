import React from 'react';
import './LoginForm.css';


const LoginForm = ({ username, password, onUsernameChange, onPasswordChange, onLogin }) => {
  return (
    <form className="form-container" onSubmit={onLogin}>
      <h2 className="form-heading">Login</h2>
      <input
        className="form-input"
        type="text"
        placeholder="Username"
        value={username}
        onChange={onUsernameChange}
      />
      <input
        className="form-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
      />
      <button className="form-button" type="submit">Login</button>
      <a className="form-link" href="#">Forgot password?</a>
    </form>
  );
};

export default LoginForm;
