import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/authActions';
import { NotificationManager } from 'react-notifications';
import '../styles/Navbar.css';

function NavbarComponent() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Dispatch da ação de login
    dispatch(login(username, password)); // Substitua `username` e `password` pelos valores adequados
    // Exibir um alerta de sucesso
    NotificationManager.success('Login realizado com sucesso', 'Sucesso');
  };

  const handleLogout = () => {
    // Dispatch da ação de logout
    dispatch(logout());
    // Exibir um alerta de sucesso
    NotificationManager.success('Logout realizado com sucesso', 'Sucesso');
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

export default NavbarComponent;
