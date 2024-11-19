import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 5 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">ICSW Kerala Branch</Typography>
          <Typography variant="body2">
            Empowering communities through quality education and support.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Quick Links</Typography>
          <Link href="/" color="inherit" underline="hover">Home</Link><br />
          <Link href="/about" color="inherit" underline="hover">About Us</Link><br />
          <Link href="/events" color="inherit" underline="hover">Events</Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Contact Us</Typography>
          <Typography variant="body2">
            Rajagiri PO, Kalamassery, Cochin-683104<br/>
            Ph.0484-2532654, 4111358<br/>
           <a href="mailto:icswkerala@gmail.com"color="white">e-mail:icswkerala@gmail.com</a><br />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
