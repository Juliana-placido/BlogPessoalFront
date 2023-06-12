import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { login, register } from '../Service';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(username, password);
      // Tratar o sucesso do login, como redirecionar para a página principal
    } catch (error: any) {
      console.error('Erro ao fazer login:', error.message);
      // Tratar o erro, como exibir uma mensagem de erro na tela
    }
  };

  const handleRegister = async () => {
    try {
      await register(username, password);
      // Tratar o sucesso do cadastro, como redirecionar para a página de login
    } catch (error: any) {
      console.error('Erro ao fazer o cadastro:', error.message);
      // Tratar o erro, como exibir uma mensagem de erro na tela
    }
  };

  return (
    <div className="login-container">
      <h2>Fazer login</h2>
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
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Entrar
      </Button>
      <Button variant="contained" color="secondary" onClick={handleRegister}>
        Cadastrar
      </Button>
    </div>
  );
};

export default Login;
