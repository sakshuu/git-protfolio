// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import "./../assets/css/contact.css"
// import { useFormik } from 'formik';
// import * as yup from "yup"

// export default function ContactMe() {
  
//   const formik = useFormik({
//     initialValues: {
//       name:"",
//       email:"",
//       subject:"",
//       message:"",
//     },
//     validationSchema: yup.object({
//       name:yup.string().required("Please Enter Name"),
//       email:yup.string().email("please enter valid email").required("Please Enter email"),
//       subject:yup.string().required("Please Enter subject"),
//       message:yup.string().required("Type Your massage"),
//     }),
//     onSubmit: (values,{ resetForm }) => {
// console.log(values);
//       resetForm();
//     }
//   })

  
//   return <>
//         <Box
//           // sx={{
//           //   display: 'flex',
//           //   flexDirection: 'column',
//           //   alignItems: 'center',
//           // }}
//           >
//           <Box component="form" noValidate onSubmit={formik.handleSubmit} >
//             <Grid container spacing={2}>
//               <Grid item xs={12} >
//                 <TextField
//                 // sx={{color:"white"}}
//                   autoComplete="given-name"
//                   name="name"
//                   required
//                   fullWidth
//                   id="name"
//                   label="Enter your name"
//                   autoFocus
//                   value={formik.values.name}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   className={
//                     formik.errors.name && formik.touched.name
//                       ? "form-control is-invalid"
//                       : "form-control"
//                   }
//                   InputLabelProps={{
//                     style: { color: 'white' },
//                   }}
//                   InputProps={{
//                     style: {
//                       color: 'white',
//                       '& .MuiOutlinedInput-notchedOutline': {
//                         '& fieldset': {
//                           borderColor: 'white',
//                         },
//                         '&:hover fieldset': {
//                           borderColor: 'white',
//                         },
//                         '&.Mui-focused fieldset': {
//                           borderColor: 'white',
//                         },
//                       },
//                     },
//                     classes: {
//                       root: 'white-border',
//                     },
//                   }}
//                 />
//                   {/* <Typography variant='body1' component="body1"
//                   sx={{ color: "red" }}
//                   className="invalid-feedback"
//                 >
//                   {formik.errors.name}
//                 </Typography> */}
//               </Grid>

//               <Grid item xs={12} >
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Enter your email"
//                   name="email"
//                   autoComplete="family-name"
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   className={
//                     formik.errors.email && formik.touched.email
//                       ? "form-control is-invalid"
//                       : "form-control"
//                   }
//                   InputLabelProps={{
//                     style: { color: 'white' },
//                   }}
//                   InputProps={{
//                     style: {
//                       color: 'white',
//                       '& .MuiOutlinedInput-notchedOutline': {
//                         '& fieldset': {
//                           borderColor: 'white',
//                         },
//                         '&:hover fieldset': {
//                           borderColor: 'white',
//                         },
//                         '&.Mui-focused fieldset': {
//                           borderColor: 'white',
//                         },
//                       },
//                     },
//                     classes: {
//                       root: 'white-border',
//                     },
//                   }}
//                   />
//                                     {/* <Typography variant='body1' component="body1"
//                   sx={{ color: "red" }}
//                   className="invalid-feedback"
//                 >
//                   {formik.errors.email}
//                 </Typography> */}
//               </Grid>

//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="subject"
//                   label="Email your subject"
//                   name="subject"
//                   autoFocus
//                   autoComplete="subject"
//                   value={formik.values.subject}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   className={
//                     formik.errors.subject && formik.touched.subject
//                       ? "form-control is-invalid"
//                       : "form-control"
//                   }
//                   InputLabelProps={{
//                     style: { color: 'white' },
//                   }}
//                   InputProps={{
//                     style: {
//                       color: 'white',
//                       '& .MuiOutlinedInput-notchedOutline': {
//                         '& fieldset': {
//                           borderColor: 'white',
//                         },
//                         '&:hover fieldset': {
//                           borderColor: 'white',
//                         },
//                         '&.Mui-focused fieldset': {
//                           borderColor: 'white',
//                         },
//                       },
//                     },
//                     classes: {
//                       root: 'white-border',
//                     },
//                   }}
//                 />
//                                   {/* <Typography variant='body1' component="body1"
//                   sx={{ color: "red" }}
//                   className="invalid-feedback"
//                 >
//                   {formik.errors.subject}
//                 </Typography> */}
//               </Grid>
              
//               <Grid item xs={12}>
//                 <TextField 
//                   required
//                   fullWidth
//                   id="outlined-multiline"
//                   label="Enter your message"
//                   multiline
//                   rows={5}
//                   name="message"
//                   autoComplete="message"
//                   autoFocus
//                   // value={formik.values.massage}
//                   // onChange={formik.handleChange}
//                   // onBlur={formik.handleBlur}
//                   // className={
//                   //   formik.errors.massage && formik.touched.massage
//                   //     ? "form-control is-invalid"
//                   //     : "form-control"
//                   // }
//                   // name="message"
//                   value={formik.values.message}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   // name="message"
//                   className={
//                     formik.errors.message && formik.touched.message
//                       ? "form-control is-invalid"
//                       : "form-control"
//                   }
//                   InputLabelProps={{
//                     style: { color: 'white' },
//                   }}
//                   InputProps={{
//                     style: {
//                       color: 'white',
//                       '& .MuiOutlinedInput-notchedOutline': {
//                         '& fieldset': {
//                           borderColor: 'white',
//                         },
//                         '&:hover fieldset': {
//                           borderColor: 'white',
//                         },
//                         '&.Mui-focused fieldset': {
//                           borderColor: 'white',
//                         },
//                       },
//                     },
//                     classes: {
//                       root: 'white-border',
//                     },
//                   }}
//                 />
//                                   {/* <Typography variant='body1' component="body1"
//                   sx={{ color: "red" }}
//                   className="invalid-feedback"
//                 >
//                   {formik.errors.message}
//                 </Typography> */}
//               </Grid>

//             </Grid>
//             <Button
//               type="submit"
//               variant="contained"
//               color='secondary'
//               fullWidth
//               sx={{ mt: 3, mb: 2 }}
//             >
//               SEND MAIL
//             </Button>

//           </Box>
//         </Box>
//                   </>
// }








import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

export default function ContactMe() {
  // Formik configuration
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: yup.object({
      name: yup.string().required('Please Enter Name'),
      email: yup.string().email('Please enter a valid email').required('Please Enter email'),
      subject: yup.string().required('Please Enter subject'),
      message: yup.string().required('Type Your message'),
    }),
    onSubmit: (values, { resetForm }) => {
      // Send form data to the backend
      axios.post('http://localhost:5000/send-email', values)
        .then((response) => {
          console.log('Email sent successfully!', response.data);
          alert('Message sent successfully!');
          resetForm(); // Reset the form after successful submission
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
          alert('Failed to send message. Please try again.');
        });
    },
  });

  return (
    <Box component="form" noValidate onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            autoComplete="given-name"
            name="name"
            required
            fullWidth
            id="name"
            label="Enter your name"
            autoFocus
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Enter your email"
            name="email"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="subject"
            label="Enter your subject"
            name="subject"
            autoComplete="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.subject && Boolean(formik.errors.subject)}
            helperText={formik.touched.subject && formik.errors.subject}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="message"
            label="Enter your message"
            name="message"
            multiline
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
        </Grid>
      </Grid>

      <Button
        type="submit"
        variant="contained"
        color="secondary"
        fullWidth
        sx={{ mt: 3, mb: 2 }}
      >
        SEND MAIL
      </Button>
    </Box>
  );
}