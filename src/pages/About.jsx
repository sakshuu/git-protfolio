import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { saveAs } from 'file-saver';
import DownloadIcon from '@mui/icons-material/Download';
import frontend from "./../assets/resume/frontend.pdf"
import profile from "./../assets/images/profile.jpg"
import "./../assets/css/about.css"


const About = () => {

  const handleDownload = () => {
    const fileUrl = frontend; 
    const fileName = 'resume.pdf'; 
    saveAs(fileUrl, fileName);
  };

  return <>
  <div className="gradient">
      <Typography variant="h3" className='heading' component="h3" >Know About me</Typography>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="about-content">
  <Grid item xs={12} sm={12} md={4} >
    <Box className='content-img'>
  <img 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" 
        src={profile} className='back-img'/>
    </Box>
       <Box className='content-img' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="3000"
     > 
     <a href='./../assets/resume/frontend.pdf'>
  <Button variant="contained" color="secondary" onClick={handleDownload} startIcon={<DownloadIcon/>}>download resume</Button>
     </a>
      </Box> 
  </Grid>
  <Grid item xs={12} sm={12} md={8}  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="600"
     data-aos-duration="700">
    <Container>
      <Box sx={{display:"flex", gap:"6px", marginBottom:"10px", marginTop:"29px"}}>
      <Typography variant='h5' > I'm </Typography>
      <Typography variant='h5' className='colorText'> Sakshi Jadhav, </Typography>
      <Typography variant='h5'> a Frontend Developer</Typography>
      </Box>
      <Typography variant='body1' className='info'>I am a frontend developer specializing in ReactJS. With expertise in HTML, CSS, JavaScript, ReactJS, and Redux, I have successfully contributed to various projects, including an e-commerce platform. During this experience, I skillfully managed state using Redux, implemented robust authentication systems, integrated APIs using Axios, and leveraged UI libraries such as Material UI and Bootstrap to enhance the overall design and user experience.
</Typography>
      <Typography variant='body1' className='info' > My knowledge also extends to CSS frameworks like Tailwind CSS and Bootstrap 5. With a strong command of these technologies, I consistently deliver high-quality and visually appealing frontend solutions. Efficient problem solver with skills in teamwork and delivering projects on time.
</Typography>
      {/* <Box className="content-img" sx={{marginTop:"20px"}} >
        <Box >
    <hr className='line'/>
    <Typography variant='h6'>Name: Sakshi Jadhav</Typography>
    <hr className='linehr'/>
    <Box sx={{display:"flex", gap:"6px"}}>
    <Typography variant='h6'>Gmail:</Typography>
    <Typography variant='h6' className='colorText'>sakshisjadhav.120@gmail.com</Typography>
    </Box>
    <hr className='linehr'/>
    <Typography variant='h6'>Age: 21</Typography>
    <hr className='linehr'/>
        </Box>
      </Box> */}
    </Container>
  </Grid>
  </Grid>
  </div>
  </>
}

export default About