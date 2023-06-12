import React, { useEffect, useState } from 'react';
import { getTemas, getPostagens } from '../Service';

function ListaTema() {
  const [temas, setTemas] = useState<any[]>([]);

  useEffect(() => {
    const fetchTemas = async () => {
      try {
        const data = await getTemas();
        setTemas(data);
      } catch (error: any) {
        console.error('Erro ao obter os temas:', error.message);
      }
    };

    fetchTemas();
  }, []);

  return (
    <div>
      <h2>Lista de Temas</h2>
      <ul>
        {temas.map((tema: any) => (
          <li key={tema.id}>{tema.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTema;
