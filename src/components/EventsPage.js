import React from 'react';
import {  Typography, Container, Grid, Card, CardContent } from '@mui/material';

const events = [
  {
    title: 'Annual Sports Day',
    date: 'March 15, 2024',
    description: 'Join us for a day of sports and activities for students and staff.',
  },
  {
    title: 'Spring Festival',
    date: 'April 20, 2024',
    description: 'Celebrate the arrival of spring with fun activities and performances.',
  },
  {
    title: 'Guest Lecture Series',
    date: 'May 10, 2024',
    description: 'Attend our guest lecture featuring renowned speakers from various fields.',
  },
  {
    title: 'Community Service Day',
    date: 'June 5, 2024',
    description: 'Participate in community service projects around the city.',
  },
  {
    title: 'Graduation Ceremony',
    date: 'July 15, 2024',
    description: 'Celebrate the achievements of our graduating class.',
  },
  {
    title: 'Fall Open House',
    date: 'September 10, 2024',
    description: 'Explore the campus and meet faculty and staff during our open house.',
  },
  {
    title: 'Winter Concert',
    date: 'December 5, 2024',
    description: 'Enjoy a festive evening of music and celebration with performances by students.',
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
