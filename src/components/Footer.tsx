import React from 'react';
import { Typography, Link } from '@material-ui/core';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Typography variant="body2" color="inherit" align="center">
        Desenvolvido por <Link color="inherit" href="">Juliana</Link>
      </Typography>
    </footer>
  );
}

export default Footer;
