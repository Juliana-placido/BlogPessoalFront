import React, { useEffect, useState } from 'react';
import { getPostagens } from '../Service';

function ListaPostagem() {
  const [postagens, setPostagens] = useState<any[]>([]);

  useEffect(() => {
    const fetchPostagens = async () => {
      try {
        const data = await getPostagens();
        setPostagens(data);
      } catch (error: any) {
        console.error('Erro ao obter as postagens:', error.message);
      }
    };

    fetchPostagens();
  }, []);

  return (
    <div>
      <h2>Lista de Postagens</h2>
      <ul>
        {postagens.map((postagem: any) => (
          <li key={postagem.id}>{postagem.titulo}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPostagem;
