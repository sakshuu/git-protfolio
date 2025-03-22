import React from 'react'
import { ContactMe } from '../components'
import { Box, Card, Container, Grid, Typography } from '@mui/material'
import "./../assets/css/contact.css"
import { address, gmail_icon, phone, skype } from '../assets/images'

const Contact = () => {

  const contactList = [
    {
      icon:address,  
      details:"Satara Parisar Ch.sambhaji nagar",
      id:1,
    },
    {
      icon:phone,  
      details:"+91 982294####",
      id:2,
    },
    {
      icon:gmail_icon,  
      details:"sakshisjadhav.120@gmail.com",
      id:3,
    },
    {
    icon: skype,
    details:"live:.cid.ba8d1a2e4ea1a8a",
    id:4,
  }
  ]
  return <>
  <Box className="gradient">
<Typography variant="h3" className="heading" component="h3">Get In Touch</Typography>
<Container  maxWidth="xl" className='contact-main'>
  <Grid container rowSpacing={1} columnSpacing={{  sm: 1, md: 2}}>
<Grid item  sm={12} md={8}>
<ContactMe />
  </Grid>
  
<Grid item  sm={12} md={4} sx={{marginBottom:"100px"}} >
{
  contactList && contactList.map(item => (
<Card data-aos="zoom-out-left" data-aos-duration="2000"  sx={{ maxWidth: 410 , maxHeight:90, backgroundColor:"#080808", color:"white", marginBottom:"20px"}}>
        <Box className="details">
     <Box data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="iconContact">
<img src={item?.icon}alt="icon" className='icondetails' />
     </Box>
     <Box data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <Typography variant="body1" sx={{marginTop:"10px"}} component="div">
          {item?.details}
          </Typography>
     </Box>
          </Box>
    </Card>
  ))
}
  </Grid>
  </Grid>
          </Container>
  </Box>
  </>
}

export default Contact