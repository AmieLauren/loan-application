import React from 'react';
import './form-header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'


export const Header = () => (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar 
    position="static"
    >
      <Toolbar>
      <img className="header" src={"https://getbuilt.com/wp-content/themes/builtwp/img/blt-brandmark.svg"} alt="builtLogo"/>
        <Typography component="div" sx={{ flexGrow: 1 }}> Loan Application
        </Typography>
        <Button className="roundButton" variant="outlined" color="inherit" href="https://getbuilt.com/">Get Built</Button>
      </Toolbar>
    </AppBar>
  </Box>
)

