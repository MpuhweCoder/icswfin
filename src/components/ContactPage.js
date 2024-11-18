import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" gutterBottom>
      Want to get in touch with us? We want to hear from you! <br/>
      Send us an email or scroll through our directory for representatives from our Regional offices<br/>
        Have questions or need more information? Reach out to us.
      </Typography>
      {/* Contact Form */}
      <Box sx={{ mt: 3 }}>
        <TextField label="Name" variant="outlined" fullWidth sx={{ mb: 3 }} />
        <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <TextField label="Message" variant="outlined" fullWidth multiline rows={4} sx={{ mb: 2 }} />
        <Button variant="contained" color="primary">Send Message</Button>
        <br/>
        <br/>
        
      <Typography variant="h4" gutterBottom>
      Our Regional Offices
      </Typography>
      <Typography variant="body1" gutterBottom>ICSW District Zones
1.Trivandrum, Kollam, Pathanamthitta <br/>
2. Idukki, Ernakulam, Kottayam<br/>
3. Thrissur, Malapuram, Palakkad<br/>
4. Wayanad, Kasargode, Kannur, Kozhikkod<br/>

      </Typography>
      </Box>

      {/* Contact Information */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2">Email: icswkerala@gmail.com</Typography>
        <Typography variant="body2">Ph.0484-2532654, 4111358</Typography>
        <Typography variant="body2">Address: Rajagiri PO, Kalamassery, Kerala,Cochin-683104</Typography>
        
      </Box>
    </Box>
  );
};

export default ContactPage;
