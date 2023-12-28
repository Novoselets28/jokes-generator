import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '60px',
          background: 'linear-gradient(90deg, #672280 1.18%, #a626d3 100%)',
          color: 'white',
          padding: '20px'
        }}  
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/ru/thumb/7/78/Trollface.svg/1200px-Trollface.svg.png"
          alt="#"
          className="header--image"
          style={{ height: '100%', marginRight: '6px' }}
          />
        <Typography
          variant="h6"
          component="div"
          className="header--title"
          style={{ fontSize: '1.25rem', marginRight: 'auto' }}
        >
          Meme generator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
