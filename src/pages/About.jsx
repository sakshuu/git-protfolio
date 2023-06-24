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
  <Box className="gradient">
<Container>
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
  <Button variant="contained" color="secondary"
   onClick={handleDownload} 
    startIcon={<DownloadIcon/>}>download resume</Button>
      </Box> 
  </Grid>
  <Grid item xs={12} sm={12} md={8} 
  data-aos="fade-left"
     data-aos-duration="700"
     >
      <Box sx={{display:{ md:"flex", sm:"inline"},  gap:"8px", marginBottom:"10px", marginTop:"29px"}}>
      <Typography variant='h5' > My Name Is </Typography>
      <Typography variant='h5' className='colorText'> Sakshi Jadhav, </Typography>
      <Typography variant='h5'> a Frontend Developer </Typography>
      </Box>
      <Typography variant='body1' className='info'>Specializing in ReactJS. With expertise in HTML, CSS, JavaScript, ReactJS, and Redux, I have successfully contributed to various projects, including an e-commerce platform. During this experience, I skillfully managed state using Redux, implemented robust authentication systems, integrated APIs using Axios, and leveraged UI libraries such as Material UI and Bootstrap to enhance the overall design and user experience.
</Typography>
      <Typography variant='body1' className='info' > My knowledge also extends to CSS frameworks like Tailwind CSS and Bootstrap 5. With a strong command of these technologies, I consistently deliver high-quality and visually appealing frontend solutions. Efficient problem solver with skills in teamwork and delivering projects on time.
</Typography>
  </Grid>
  </Grid>
    </Container>
  </Box>
  </>
}

export default About