import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { TypeAnimation } from "react-type-animation";
import { Link, useNavigate } from 'react-router-dom';
import  github_icon from "./../assets/images/skills/github_icon.png";
import  gmail_icon from "./../assets/images/gmail_icon.png";
import  linkedin_icon from "./../assets/images/linkedin_icon.png";
import "./../assets/css/home.css"

const Home = () => {
  const navigate=  useNavigate()

  const handleEmail = () => {
    const emailAddress = 'sakshisjadhav.120@gmail.com'; // Replace with your Gmail address

    const mailtoLink = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(emailAddress)}`;

    window.open(mailtoLink);
  };


  return <>
  <Box className="gradient"> 
  <Container>
  <Grid align="center">
    <Box className="content">
      <Box>
  <Typography variant='h4' id="heading" sx={{ lineHeight: "60px"}}>Welcome</Typography>
  <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom:"20px"}}>
    <TypeAnimation id="heading" className='typeani'
      sequence={[
        "I'm Sakshi Jadhav", 
        2000, 
        "I'm React Devloper", 
        2000, 
        "I'm Frontend Devloper",
        2000, 
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}/>
      </Typography>

<Typography variant='span' className='fontsize' data-aos="zoom-in" data-aos-duration="2000">A creative UI Developer with passion for the latest solutions and
interactive design. Talented at planning and creating animations for
websites. Efficient problem solver with skills in teamwork and delivering 
projects on time</Typography>

<Box  data-aos="zoom-in" data-aos-duration="3000">
<Typography variant='h5' className='fllowMe typeani' component="h5">Follow Me</Typography>

  <Link to="https://github.com/sakshuu">
  <img className='icon' src={github_icon} alt="github" />
  </Link>

  <Link to="https://www.linkedin.com/in/sakshi-jadhav-8b6429226">
  <img className='icon' src={linkedin_icon} alt="linkedin" />
  </Link>

<Link onClick={handleEmail}>
  <img className='icon' src={gmail_icon} alt="gmail" />
</Link>
</Box>

<Box className="main-btn"
 data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="2000">
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