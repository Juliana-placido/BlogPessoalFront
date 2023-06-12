import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/';

export async function login(username: string, password: string) {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao fazer login');
  }
}

export async function register(username: string, password: string) {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, { username, password });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao fazer o cadastro');
  }
}

export async function getTemas() {
  try {
    const response = await axios.get(`${API_BASE_URL}/temas`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter os temas');
  }
}

export async function getPostagens() {
  try {
    const response = await axios.get(`${API_BASE_URL}/postagens`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter as postagens');
  }
}
