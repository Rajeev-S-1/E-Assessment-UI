import React from 'react';
import { Navigate ,Route } from 'react-router-dom';

const AuthComponent = ({ children }) => {
  const isAuthenticated = () => {
    // Replace 'your-jwt-secret' with the actual secret used to sign the JWT token
    const token = localStorage.getItem('jwtToken');
    if (token) {
      try {
        return true;
      } catch (error) {
        return false;
      }
    }
    return false;
  };

  return (
        isAuthenticated() ? children : <Navigate to="/" />
  );
};

export default AuthComponent;
