import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const features = [
  { 
    imgSrc: '../machinelearning1.jpg', // Replace with your image path
    title: 'What does "ICSW" stand for?', 
    description: 'ICSW stands for International Council on Social Welfare.' 
  },
  { 
    imgSrc: '../ai.jpeg', // Replace with your image path
    title: 'When was ICSW founded?', 
    description: 'The International Council on Social Welfare (ICSW) was founded in Paris in 1928 under the original name of International Conference of Social Work. It became the International Council on Social Welfare on the 1st of January 1967.' 
  },
  { 
    imgSrc: '../circuit-board.jpg', // Replace with your image path
    title: 'How can I become a member of ICSW?', 
    description: 'To find all the information you need to know about becoming a member of ICSW visit our membership page.' 
  },
];

const FeaturesSection = () => {
  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
      FQA's
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ textAlign: 'center', p: 2 }}>
              <CardContent>
                <Box
                  src={feature.imgSrc}
                  alt={feature.title}
                  sx={{ width: 300, height:50 , mb: 2 }}
                />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
