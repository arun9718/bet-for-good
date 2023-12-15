import React from 'react';
import { Typography, Container, Link } from '@mui/material';

const Footer = () => {
  return (
    <Container 
        component="footer" 
        maxWidth="false" 
        sx={{ 
            marginTop: 'auto',
            paddingTop: '20px',
            paddingBottom: '20px',
            textAlign: 'center',
            backgroundColor: '#f0f0f0',
            position: 'fixed',
            bottom: 0,
            width: '100%'
             }}>
      <Typography variant="body2" color="text.secondary">
        Bet For Good &copy; {new Date().getFullYear()}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px' }}>
        <Link href="#" color="inherit">
          Terms of Service
        </Link>
        {' | '}
        <Link href="#" color="inherit">
          Privacy Policy
        </Link>
      </Typography>
    </Container>
  );
}


export default Footer;
