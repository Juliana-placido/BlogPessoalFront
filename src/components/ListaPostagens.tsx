import React, { useState, useEffect } from 'react';
import { getPostagens, deletePostagem } from '../Service';

interface Postagem {
  id: number;
  titulo: string;
  conteudo: string;
}

function ListaPostagem() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  useEffect(() => {
    // Carregar as postagens ao montar o componente
    carregarPostagens();
  }, []);

  async function carregarPostagens() {
    try {
      const data = await getPostagens();
      setPostagens(data);
    } catch (error) {
      console.error('Erro ao obter as postagens:', error);
    }
  }

  async function handleDeletePostagem(id: number) {
    try {
      await deletePostagem(id);
      // Remover a postagem da lista após excluí-la
      setPostagens(postagens.filter(postagem => postagem.id !== id));
    } catch (error) {
      console.error('Erro ao excluir a postagem:', error);
    }
  }

  async function handleCreatePostagem() {
    try {
      // Implementar a lógica para criar uma nova postagem
      // Chamar a função adequada do Service para criar a postagem
      // Atualizar a lista de postagens após a criação
    } catch (error) {
      console.error('Erro ao criar a postagem:', error);
    }
  }

  return (
    <div>
      {postagens.map(postagem => (
        <div key={postagem.id}>
          <h3>{postagem.titulo}</h3>
          <p>{postagem.conteudo}</p>
          <button onClick={() => handleDeletePostagem(postagem.id)}>
            Excluir
          </button>
        </div>
      ))}
      <button onClick={handleCreatePostagem}>Criar Postagem</button>
    </div>
  );
}

export default ListaPostagem;
