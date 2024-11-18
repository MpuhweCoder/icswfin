import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';

const testimonials = [
  {
    name: 'Dr. Kiran Thampi ',
    statement: 'President, ICSW Kerala',
    avatar: '/path/to/avatar1.jpg',
  },
  {
    name: 'Mr. Suresh P',
    statement: 'Vice President, ICSW Kerala (Thrissur branch)',
    avatar: '/path/to/avatar2.jpg',
  },
  {
    name: 'Adv. Mary Siriach',
    statement: 'Vice President, ICSW Kerala (Idukki branch)',
    avatar: '/path/to/avatar2.jpg',
  },
  {
    name: 'Mr. P C Jose ',
    statement: 'Vice President, ICSW Kerala (Wayanad branch)',
    avatar: '/path/to/avatar1.jpg',
  },
  {
    name: 'Dr. Mary John J ',
    statement: 'Vice President, ICSW Kerala (Trivandrum branch)',
    avatar: '/path/to/avatar1.jpg',
  },
  {
    name: 'Anoop Joseph Joy  ',
    statement: 'General Secretary, ICSW Kerala',
    avatar: '/path/to/avatar1.jpg',
  },
  {
    name: 'Deepak G   ',
    statement: 'Joint Secretary, ICSW Kerala',
    avatar: '/path/to/avatar1.jpg',
  },
  {
    name: 'Mr. Jacob Thumbayil',
    statement: 'Treasurer, ICSW Kerala',
    avatar: '/path/to/avatar1.jpg',
  },
  {
    name: 'Smt. Rosakutty Abraham ',
    statement: 'Executive member',
    avatar: '/path/to/avatar1.jpg',
  },
  {
    name: 'Mr. Sunny Assariparambil',
    statement: 'Executive member',
    avatar: '/path/to/avatar1.jpg',
  },
  {
    name: 'Ms. Aisha Salim ',
    statement: 'Executive member',
    avatar: '/path/to/avatar1.jpg',
  },
  {
    name: 'C V Antony ',
    statement: 'Executive member',
    avatar: '/path/to/avatar1.jpg',
  },
  
];

const TestimonialsSection = () => {
  return (
    <Box sx={{ p: 5, bgcolor: 'grey.100' }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
      Staff & Office
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={5} key={index}>
            <Card>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={testimonial.avatar} sx={{ width: 60, height: 60, mr: 2 }} />
                <Box>
                  <Typography variant="h6">{testimonial.name}</Typography>
                  <Typography variant="body2">{testimonial.statement}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialsSection;
