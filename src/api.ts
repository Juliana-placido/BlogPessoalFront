// src/api.ts

const API_BASE_URL = 'http://localhost:8080'; 

export async function login(username: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Erro ao fazer login');
  }

  const data = await response.json();
  return data;
}

export async function register(username: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Erro ao fazer o cadastro');
  }

  const data = await response.json();
  return data;
}
