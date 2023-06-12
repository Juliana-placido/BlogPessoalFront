import axios from 'axios';

interface Postagem {
  id: number;
  titulo: string;
  conteudo: string;
}

export interface Tema {
  id?: number;
  nome: string;
  descricao: string;
}

const API_BASE_URL = 'http://localhost:8080/';

export async function login(username: string, password: string) {
  // implementação do método de login
}

export async function register(username: string, password: string) {
  // implementação do método de registro
}

export async function getTemas() {
  // implementação do método GET para obter os temas
  try {
    const response = await axios.get(`${API_BASE_URL}/temas`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter os temas');
  }
}

export async function createTema(tema: Tema) {
  // implementação do método POST para criar um tema
  try {
    const response = await axios.post(`${API_BASE_URL}/temas`, tema);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar o tema');
  }
}

export async function updateTema(id: number, tema: Tema) {
  // implementação do método PUT para atualizar um tema
  try {
    const response = await axios.put(`${API_BASE_URL}/temas/${id}`, tema);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar o tema');
  }
}

export async function deleteTema(id: number) {
  // implementação do método DELETE para excluir um tema
  try {
    await axios.delete(`${API_BASE_URL}/temas/${id}`);
  } catch (error) {
    throw new Error('Erro ao excluir o tema');
  }
}

export async function getPostagens() {
  // implementação do método GET para obter as postagens
  try {
    const response = await axios.get(`${API_BASE_URL}/postagens`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter as postagens');
  }
}

export async function createPostagem(postagem: Postagem) {
  // implementação do método POST para criar uma postagem
  try {
    const response = await axios.post(`${API_BASE_URL}/postagens`, postagem);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar a postagem');
  }
}

export async function updatePostagem(id: number, postagem: Postagem) {
  // implementação do método PUT para atualizar uma postagem
  try {
    const response = await axios.put(`${API_BASE_URL}/postagens/${id}`, postagem);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar a postagem');
  }
}

export async function deletePostagem(id: number) {
  // implementação do método DELETE para excluir uma postagem
  try {
    await axios.delete(`${API_BASE_URL}/postagens/${id}`);
  } catch (error) {
    throw new Error('Erro ao excluir a postagem');
  }
}
