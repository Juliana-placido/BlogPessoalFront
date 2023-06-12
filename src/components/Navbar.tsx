import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/authActions';
import '../styles/Navbar.css';

function Navbar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Dispatch da ação de login
    dispatch(login(username, password)); // Substitua `username` e `password` pelos valores adequados
  };

  const handleLogout = () => {
    // Dispatch da ação de logout
    dispatch(logout());
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" className="title">
          Meu Blog
        </Typography>
        {isAuthenticated ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
