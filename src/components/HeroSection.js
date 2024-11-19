import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: '70vh',
        backgroundImage: 'url("../homercss.png")', // Replace with your hero image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        p: 2,
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
        Welcome to ICSW Kerala Branch
      </Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Empowering Communities through Education and Support
      </Typography>
      <Link to="/about" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="secondary" size="large">
          Learn More
        </Button>
      </Link>
    </Box>
  );
};

export default HeroSection;
