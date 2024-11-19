import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

// Event data with image paths
const events = [
  {
    title: 'Annual Sports Day',
    date: 'March 15, 2024',
    description: 'Join us for a day of sports and activities for students and staff.',
    image: '../event1.png', // Add the path to the image here
  },
  {
    title: 'Spring Festival',
    date: 'April 20, 2024',
    description: 'Celebrate the arrival of spring with fun activities and performances.',
    image: '../event2.png',
  },
  {
    title: 'Guest Lecture Series',
    date: 'May 10, 2024',
    description: 'Attend our guest lecture featuring renowned speakers from various fields.',
    image: '../event3.png',
  },
  {
    title: 'Community Service Day',
    date: 'June 5, 2024',
    description: 'Participate in community service projects around the city.',
    image: '../event4.png',
  },
];

const EventsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        ICSW Events
      </Typography>
      <Grid container spacing={4}>
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="500"
                image={event.image}
                alt={event.title}
              />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {event.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  {event.date}
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EventsPage;

