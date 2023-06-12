import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { createTema, updateTema, deleteTema } from '../Service';
import { Tema } from '../Service';

function ListaTema() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleCreateTema = async () => {
    try {
      const tema = { nome, descricao };
      const createdTema = await createTema(tema);
      // Tratar o sucesso da criação do tema
    } catch (error: any) {
      console.error('Erro ao criar o tema:', error.message);
      // Tratar o erro, como exibir uma mensagem de erro na tela
    }
  };

  const handleUpdateTema = async (id: number, tema: Tema) => {
    try {
      const updatedTema = await updateTema(id, tema);
      // Tratar o sucesso da atualização do tema
    } catch (error: any) {
      console.error('Erro ao atualizar o tema:', error.message);
      // Tratar o erro, como exibir uma mensagem de erro na tela
    }
  };

  const handleDeleteTema = async (id: number) => {
    try {
      await deleteTema(id);
      // Tratar o sucesso da exclusão do tema
    } catch (error: any) {
      console.error('Erro ao excluir o tema:', error.message);
      // Tratar o erro, como exibir uma mensagem de erro na tela
    }
  };

  // ...

  return (
    <div className="lista-tema-container">
      <h2>Criar Tema</h2>
      <TextField
        label="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <TextField
        label="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleCreateTema}>
        Criar Tema
      </Button>
    </div>
  );
}

export default ListaTema;
