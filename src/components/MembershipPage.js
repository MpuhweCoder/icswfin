import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  phoneNumber: yup.string().required('Phone Number is required'),
});

const MembershipPage = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box sx={{p: 3}}>
      <Typography variant="h4" gutterBottom>
        Membership
      </Typography>
      <Typography variant="body1" gutterBottom>
        Join us and contribute to the welfare of our community.
      </Typography>
      <Typography variant="body1" gutterBottom>Any individual or organization interested in Social Development can be a Member of the Indian Council of Social Welfare (ICSW), < br/>Kerala State Branch through the following memberships:

•	Institutional Member (Colleges/Organisations): < br/>Life Member< br/>
Rs.3000< br/>
•	Individual: Life Members< br/>
Rs.2000/- < br/>
•	NGO Member:< br/>
Rs.500/- per annum< br/>
•	Individual Member:< br/>
Rs.250/- per annum< br/>
•	Associate Student Member:< br/>
Rs.100/- per annum< br/>


      </Typography>
      <Typography variant="h4" gutterBottom>
        Membership form for sign up
      </Typography>
      <Box component="form" onSubmit={formik.handleSubmit} sx={{ width: '100%', height: 'auto',mt: 3 }}>
        <TextField
          fullWidth
          id="fullName"
          name="fullName"
          label="Full Name"
          variant="outlined"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
          sx={{ mb: 2,width: '100%', height: 'auto' }}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          id="phoneNumber"
          name="phoneNumber"
          label="Phone Number"
          variant="outlined"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" type="submit">
          Apply Now
        </Button>
      </Box>
    </Box>
  );
};

export default MembershipPage;
