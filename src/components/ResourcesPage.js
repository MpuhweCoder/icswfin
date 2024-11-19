import React from 'react';
import { Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';

const resources = [
  {
    title: 'Annual Report 2023-2024',
    description: 'The Annual General Body Meeting of ICSW Kerala State Branch for the year 2023-24 was conducted on 29th July, 2023 at Rajagiri College of Social Sciences (Autonomous), Kalamassery, Kochi. 28 members were present during the meeting. Dr. Kiran Thampi presented the annual report for the years 2022 to 2023. Mr. Anoop Joseph Joy, Treasurer presented the audited statements for the year 2022 to 2023.',
    link: 'https://smallpdf.com/file#s=15dc400b-c6ba-4a62-ad43-6d8448e82a3e',
  },
  {
    title: 'Annual Report 2022-2023 ',
    description: 'The Annual General Body Meeting of ICSW Kerala State Branch for the year 2022-23 was conducted on 24th April, 2022 at Rajagiri College of Social Sciences (Autonomous), Kalamassery, Kochi. 27 members were present during the meeting. Mr.Aniyan Cheriyan presented the annual report for the years 2019 to 2022. Mr.Santhosh M, Treasurer presented the audited statements for the year 2019-2022.',
    link: 'https://smallpdf.com/file#s=15dc400b-c6ba-4a62-ad43-6d8448e82a3e',
  },
  {
    title: 'Annual Report 2021-2022',
    description: 'The Executive meeting (virtual) of ICSW Kerala State Branch held on Saturday, 20-6-2020. Meeting commenced with a silent prayer. Mr. Aniyan Cheriyan , Gen: Secretary, ICSW Kerala delivered a warm welcome to all the members. Dr. Mary Venus Joseph, President, ICSW Kerala in her presidential address expressed her happiness to see the executive members virtually and stated Covid-19 as the reason for organising the executive meeting virtually.',
    link: 'https://smallpdf.com/file#s=15dc400b-c6ba-4a62-ad43-6d8448e82a3e',
  },
  {
    title: 'Annual Report 2020-2021',
    description: 'Comprehensive guide for students covering policies, procedures, and services.',
    link: 'https://smallpdf.com/file#s=15dc400b-c6ba-4a62-ad43-6d8448e82a3e',
  },
  {
    title: 'Annual Report 2019-2020',
    description: 'University policies and expectations for student behavior.',
    link: 'https://smallpdf.com/file#s=262f35cd-4f8d-46f5-8865-411b6de89ba2',
  },
  {
    title: 'Annual Report 2018-2019',
    description: 'The annual general body meeting of ICSW Kerala was held on Saturday 28th July 2018 at 10.am.Mr. Anoop Joseph Joy made the welcome speech. Dr. Mary Joseph in her presidential speech toldabout the origin of ICSW in India and formation of ICSW Kerala branch. She also spoke about the strengthening of all district branches.',
    link: 'https://smallpdf.com/file#s=0c5d7f2e-1c26-42e0-bd6f-b245d5475e8e',
  },
];

const ResourcesPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        ICSW Kerala Resources
      </Typography>
      <Grid container spacing={4}>
        {resources.map((resource, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 3,
                transition: '0.3s',
                '&:hover': { boxShadow: 6 },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {resource.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textPrimary"
                  sx={{
                    height: '120px', // Limit description height
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3, // Limit to 3 lines
                  }}
                >
                  {resource.description}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="primary"
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  margin: '16px', // Add margin for spacing
                }}
                aria-label={`Download ${resource.title}`}
              >
                Download
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ResourcesPage;
