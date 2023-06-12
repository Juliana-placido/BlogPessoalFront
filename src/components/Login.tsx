import React, { useState } from 'react';
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
      // Tratar o sucesso do login, como redirecionar para a página principal
    } catch (error: any) {
      console.error('Erro ao fazer login:', (error as Error).message);
      // Tratar o erro, como exibir uma mensagem de erro na tela
    }
  };

  const handleRegister = async () => {
    try {
      await register(username, password);
      // Tratar o sucesso do cadastro, como redirecionar para a página de login
    } catch (error: any) {
      console.error('Erro ao fazer o cadastro:', (error as Error).message);
      // Tratar o erro, como exibir uma mensagem de erro na tela
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
    </div>
  );
}

export default Login;
