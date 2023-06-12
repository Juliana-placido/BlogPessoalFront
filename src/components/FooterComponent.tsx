import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { useSelector } from 'react-redux';
import '../styles/Footer.css';

function FooterComponent() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <footer className="footer">
      <Typography variant="body2" color="inherit" align="center">
        Desenvolvido por <Link color="inherit" href="">Juliana</Link>
        {isAuthenticated && (
          <span> - Você está autenticado</span>
        )}
      </Typography>
    </footer>
  );
}

export default FooterComponent;
