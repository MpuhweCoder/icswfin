import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const partners = [
  '../rcss.jpg',
  '../indi.jpg',
  '../uno.png',
  
];

const PartnersSection = () => {
  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
        Our Partners
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {partners.map((logo, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Box component="img" src={logo} alt={`Partner ${index}`} sx={{ width: '100%', height: 'auto' }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PartnersSection;
