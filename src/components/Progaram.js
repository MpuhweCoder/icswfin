import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const programs = [
  {
    imgSrc: '../reserch.png', // Replace with your image path
    title: 'Activities of ICSW Kerala',
    description: 'Policy think tanks .',
    link: '/programs/',
  },
 
  {
    
    imgSrc: '../nngos.png', // Replace with your image path
    title: 'Activities of ICSW Kerala',
    description: '•	E-News  letter-a forum to disseminate best practices of the NGOs.',
    link: '/programs/history',
  },
  {
    imgSrc: '../soci.png', // Replace with your image path
    title: 'Activities of ICSW Kerala',
    description: '•	Advocacy and liaison with government departments on behalf of NGOs.',
    link: '/programs/environmental-science',
  },
  
  {
    imgSrc: '../cert.png', // Replace with your image path
    title: 'Activities of ICSW Kerala',
    description: '•	Undertake relevant social research .It is a method that helps to uncover social happenings in human societies and derive new knowledge. ',
    link: '/programs/data-science',
  },
 
  {
    imgSrc: '../ngos.png', // Replace with your image path
    title: 'Activities of ICSW Kerala',
    description: 'Capacity building programmes for NGOs &Capacity profiling of NGOs.Non-governmental organizations (NGOs) are organizations that work to improve social welfare and human wellbeing. They often provide services to vulnerable populations, such as the elderly, homeless, children, and people with disabilities. NGOs can help to bridge the gap between the needs of the community and government services. ',
    link: '/programs/psychology',
  },

  {
    imgSrc: '../lst.png', // Replace with your image path
    title: 'ICSW Kerala',
    description: '•	ICSW has a significant role in contributing to the profession of Social Work in our country, India and it aids in the verification process of Social Workers Abroad..',
  },
];

const ProgramsPage = () => {
  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h3" align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
      What is ICSW Kerala?
      </Typography>
      <Typography variant="body1" paragraph>
      It’s a non-political, non-governmental, non-sectarian and non-profit making organisation in the field of social welfare affiliated to the National Body of Indian Council of Social Welfare, Mumbai. It functions in Kerala since 3rd October 1954. The headquarters of the Kerala State Branch is at Rajagiri College of Social Sciences, Kalamassery and it has branches in all the 14 Districts of Kerala state
      </Typography>

     <Grid container spacing={4}>
        {programs.map((program, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ textAlign: 'center' }}>
              <CardContent>
                <Box
                  component="img"
                  src={program.imgSrc}
                  alt={program.title}
                  sx={{ width: '100%', height: '99%', mb: 2 }}
                />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {program.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {program.description}
                </Typography>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" >Learn More
                </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProgramsPage;
