import React from 'react';
import {  Typography, Container } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Our Mission
      </Typography>
      <Typography variant="body1" paragraph>
        At ICSW Kerala Division, our mission is to empower communities through quality education, advocacy, and support. We believe in fostering an inclusive environment where everyone has access to the resources they need to succeed.
      </Typography>
      
      <Typography variant="h5" component="h2" gutterBottom>
        Our Vision
      </Typography>
      <Typography variant="body1" paragraph>
        Our vision is to be a leading organization in the field of education, creating a better future for our community through innovative programs and partnerships. We strive to create a world where education is accessible to all, regardless of background.
      </Typography>
      
      <Typography variant="h5" component="h2" gutterBottom>
        History
      </Typography>
      <Typography variant="body1" paragraph>
      ICSW has the highest level of consultative status with the United Nations’ Economic and Social Council. We are also accredited to the Food and Agriculture Organization, International Labour Organization, UNICEF, UNESCO, World Health Organization and a number of regional intergovernmental organizations.
The council has 22 state branches in various states and union territories.The 60 years of the Indian Council of Social Welfare (earlier Indian Conference of Social Work) from 1947 could be very broadly put in different phases. The first decade, which began with the dawn of India's Independence it¬self, at its stage of infancy, is the foundation period, followed by the 10 years of transformation and consolidation from Conference to Council at the National Conference held at Madras in 1967.The first All India Conference of Social Workers was held in Bombay from Nov. 6th to 10th, I947. It was attended by about 425 delegates representing 150 institutions distributed over towns and cities of India and Pakistan. As many as 14 Departments of the Central and State Govt. participated in the Con¬ference through their delegates.The second All India Conference was held at Madras in 1948. The subse¬quent conferences were held at Delhi, Jamshedpur, Hyderabad, Cal¬cutta, Bangalore, Uttar Pradesh, Madhya Pradesh and CochinThe Headquarters continued to be in Bombay and all the office bearers were also chosen from Bombay. Many members had the opinion that it was not necessary to have all the office bearers in Bombay itself and people from other states should also be brought into the executive commit¬tee. It may look paradoxical to record that for the period 1988-90 not a single office bearer is from Bombay. Mr. V. Giri while he was the Governor of U.P. was elected the President at natio¬nal level of ICSW and Vice-Presi¬dent of Madras Branch from its inception.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Our Team
      </Typography>
      <Typography variant="body1" paragraph>
        Our team is composed of dedicated professionals who are passionate about education and community service. Together, we work tirelessly to implement programs that benefit our members and the community at large. We believe in collaboration and strive to build strong partnerships with other organizations and stakeholders.
      </Typography>
      
      <Typography variant="h5" component="h2" gutterBottom>
        Get Involved
      </Typography>
      <Typography variant="body1" paragraph>
        If you share our vision and mission, we invite you to get involved! There are many ways to contribute, whether through volunteering, donating, or participating in our activities. Together, we can make a difference.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        For more information about our organization , please reach out to us at <a href="mailto:icswkerala@gmail.com">contact@icswkerala.com</a> or call us at +91-0484-2532654.
      </Typography>
    </Container>
  );
};

export default AboutUs;
