import React, { useState } from 'react'; 
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    // Validate Name
    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Validate Email
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
      isValid = false;
    }

    // Validate Message
    if (!message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form (you can integrate with an API or another handler here)
      console.log('Form submitted:', { name, email, message });
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        Want to get in touch with us? We want to hear from you! <br />
        Send us an email or scroll through our directory for representatives from our Regional offices<br />
        Have questions or need more information? Reach out to us.
      </Typography>
      
      {/* Contact Form */}
      <Box sx={{ mt: 3 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 3 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            sx={{ mb: 2 }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={!!errors.message}
            helperText={errors.message}
          />
          <Button variant="contained" color="primary" type="submit">Send Message</Button>
        </form>
        
        <br />
        <br />
        
        <Typography variant="h4" gutterBottom>
          Our Regional Offices
        </Typography>
        <Typography variant="body1" gutterBottom>
          ICSW District Zones
          <br />
          1. Trivandrum, Kollam, Pathanamthitta <br />
          2. Idukki, Ernakulam, Kottayam <br />
          3. Thrissur, Malapuram, Palakkad <br />
          4. Wayanad, Kasargode, Kannur, Kozhikkod <br />
        </Typography>
      </Box>

      {/* Contact Information */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2">Email: icswkerala@gmail.com</Typography>
        <Typography variant="body2">Ph.0484-2532654, 4111358</Typography>
        <Typography variant="body2">Address: Rajagiri PO, Kalamassery, Kerala, Cochin-683104</Typography>
      </Box>
    </Box>
  );
};

export default ContactPage;
