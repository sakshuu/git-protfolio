import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import "./../assets/css/contact.css"
import { useFormik } from 'formik';
import * as yup from "yup"
import { Typography } from '@mui/material';

export default function ContactMe() {
  
  // const actionDispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      name:"sakshi",
      email:"sakshi@gmail.com",
      subject:"hashkas",
      message:"ajbsjkvasju",
    },
    validationSchema: yup.object({
      name:yup.string().required("Please Enter Name"),
      email:yup.string().email("please enter valid email").required("Please Enter email"),
      subject:yup.string().required("Please Enter subject"),
      message:yup.string().required("Type Your massage"),
    }),
    onSubmit: (values,{ resetForm }) => {
      // actionDispatch(contactMeListData(values))
console.log(values);
      resetForm();
    }
  })

  
  return <>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Box component="form" noValidate onSubmit={formik.handleSubmit} >
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                // sx={{color:"white"}}
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
                  className={
                    formik.errors.name && formik.touched.name
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  InputProps={{
                    style: {
                      color: 'white',
                      '& .MuiOutlinedInput-notchedOutline': {
                        '& fieldset': {
                          borderColor: 'white',
                        },
                        '&:hover fieldset': {
                          borderColor: 'white',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'white',
                        },
                      },
                    },
                    classes: {
                      root: 'white-border',
                    },
                  }}
                />
                  <Typography variant='body1' component="body1"
                  sx={{ color: "red" }}
                  className="invalid-feedback"
                >
                  {formik.errors.name}
                </Typography>
              </Grid>

              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Enter your email"
                  name="email"
                  autoComplete="family-name"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.email && formik.touched.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  InputProps={{
                    style: {
                      color: 'white',
                      '& .MuiOutlinedInput-notchedOutline': {
                        '& fieldset': {
                          borderColor: 'white',
                        },
                        '&:hover fieldset': {
                          borderColor: 'white',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'white',
                        },
                      },
                    },
                    classes: {
                      root: 'white-border',
                    },
                  }}
                  />
                                    <Typography variant='body1' component="body1"
                  sx={{ color: "red" }}
                  className="invalid-feedback"
                >
                  {formik.errors.email}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="subject"
                  label="Email your subject"
                  name="subject"
                  autoFocus
                  autoComplete="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.subject && formik.touched.subject
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  InputProps={{
                    style: {
                      color: 'white',
                      '& .MuiOutlinedInput-notchedOutline': {
                        '& fieldset': {
                          borderColor: 'white',
                        },
                        '&:hover fieldset': {
                          borderColor: 'white',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'white',
                        },
                      },
                    },
                    classes: {
                      root: 'white-border',
                    },
                  }}
                />
                                  <Typography variant='body1' component="body1"
                  sx={{ color: "red" }}
                  className="invalid-feedback"
                >
                  {formik.errors.subject}
                </Typography>
              </Grid>
              
              <Grid item xs={12}>
                <TextField 
                  required
                  fullWidth
                  id="outlined-multiline"
                  label="Enter your message"
                  multiline
                  rows={5}
                  name="message"
                  autoComplete="message"
                  autoFocus
                  // value={formik.values.massage}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // className={
                  //   formik.errors.massage && formik.touched.massage
                  //     ? "form-control is-invalid"
                  //     : "form-control"
                  // }
                  // name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // name="message"
                  className={
                    formik.errors.message && formik.touched.message
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  InputProps={{
                    style: {
                      color: 'white',
                      '& .MuiOutlinedInput-notchedOutline': {
                        '& fieldset': {
                          borderColor: 'white',
                        },
                        '&:hover fieldset': {
                          borderColor: 'white',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'white',
                        },
                      },
                    },
                    classes: {
                      root: 'white-border',
                    },
                  }}
                />
                                  <Typography variant='body1' component="body1"
                  sx={{ color: "red" }}
                  className="invalid-feedback"
                >
                  {formik.errors.message}
                </Typography>
              </Grid>

            </Grid>
            <Button
              type="submit"
              variant="contained"
              color='secondary'
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              SEND MAIL
            </Button>

          </Box>
        </Box>
                  </>
}