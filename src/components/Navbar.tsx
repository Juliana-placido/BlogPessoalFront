// src/components/Navbar.tsx

import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" className="title">
          Meu Blog
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
