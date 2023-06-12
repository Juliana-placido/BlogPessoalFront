import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { login, register } from '../Service';
import { useLocalStorage } from '../hooks/useLocalStorage';
import '../styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useLocalStorage('loggedIn', false);

  const handleLogin = async () => {
    try {
      await login(username, password);
      setLoggedIn(true);
      
    } catch (error: any) {
      console.error('Erro ao fazer login:', (error as Error).message);
 
    }
  };

  const handleRegister = async () => {
    try {
      await register(username, password);
    
    } catch (error: any) {
      console.error('Erro ao fazer o cadastro:', (error as Error).message);
    
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Fazer login</h2>
      <TextField
        label="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        className="login-button"
        onClick={handleLogin}
      >
        Entrar
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className="register-button"
        onClick={handleRegister}
      >
        Cadastrar
      </Button>
      {loggedIn && (
        <Link to="/Home">Redirecionar para a página principal</Link>
      )}
    </div>
  );
}

export default Login;
