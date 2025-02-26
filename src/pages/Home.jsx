import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { TypeAnimation } from "react-type-animation";
import { Link, useNavigate } from 'react-router-dom';
import "./../assets/css/home.css"
import { gmail_icon, linkedin_icon, skype } from '../assets/images';
import { github_icon } from '../assets/images/skills';

const Home = () => {
  const navigate=  useNavigate()

  const handleEmail = () => {
    const emailAddress = 'sakshisjadhav.120@gmail.com'; 
    const mailtoLink = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(emailAddress)}`;
    window.open(mailtoLink);
  };


  return <>
  <Box className="gradient"> 
  <Container>
  <Grid align="center">
    <Box className="content">
      <Box>
  <Typography id="heading"  variant='h4'
  sx={{ lineHeight: "60px"}}>Welcome</Typography>
  <Typography component="h3" variant='h3' sx={{ fontWeight: 'bold', marginBottom:"20px" }}>
    <TypeAnimation id="heading" className='typeani'
      sequence={[
        2000,
        "I'm Sakshi Jadhav",  
        1000, 
        "I'm Frontend Devloper",
        1000, 
        "I'm Web Devloper",
        1000, 
        "I'm React Devloper", 
        1000, 
        "I'm UI Developer",
        1000, 
        "I'm Backend Developer", 
        1000, 
        "I'm MERN Stack Developer",
        1000, 
        "I'm Full Stack Developer",
        1000, 
        "I'm Software Developer ",
        1000, 
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}/>
      </Typography>
 

<Typography variant='span' className='fontsize' data-aos="zoom-in" data-aos-duration="2000"> Frontend Developer with 1.9 years of experience in building user-friendly, responsive web applications using React.js, Vue.js 
and MERN Stack. Proven expertise in delivering high-performance, device-optimized solutions that enhance user engagement 
and operational efficiency. Skilled in Full-Stack development, including Node.js, Express.js, and MongoDB, to create scalable 
and efficient web applications. Seeking to contribute to innovative projects in a dynamic team environment.</Typography>

<Box  data-aos="zoom-in" data-aos-duration="3000">
<Typography variant='h5' className='fllowMe typeani' component="h5">Follow or DM me</Typography>



  <Link to="https://www.linkedin.com/in/sakshi-jadhav-8b6429226">
  <img className='icon' src={linkedin_icon} alt="linkedin" />
  </Link>
<Link to="https://join.skype.com/invite/w3faKSeeqfxM">
  <img className='icon' src={skype} alt="skype" />
</Link>

<Link onClick={handleEmail}>
  <img className='icon' src={gmail_icon} alt="gmail" />
</Link>

<Link to="https://github.com/sakshuu">
  <img className='icon' src={github_icon} alt="github" />
  </Link>
</Box>

<Box className="main-btn">
  <Button
 onClick={e => navigate(`/contact`)}
variant="container" 
color="secondary"
id="btn" size="large">Hire Me</Button>

</Box>
</Box>
 </Box>
</Grid>
 </Container>
   </Box> 
  </>
}

export default Home