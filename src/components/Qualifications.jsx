import { Badge, Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import "./../assets/css/resume.css"

const Qualifications = () => {
  
const education = [
  {
    year:"JUNE 2019- JUNE 2022",  
    title:"Deogiri Institute Of Technology AndManagement Studies",  
    city:'AURANGABAD',
    degree:"Bachlar of computer science",  
    percentage:'76.37%',
    desc:"Dr. Babasaheb Ambedkar Marathwada University aut consectetur dignissimos nesciunt consequatur deleniti, ut cum cupiditate sapiente blanditiis quibusdam voluptate dolorum eligendi!",  
    id:"1"
  },
  {
    year:"JUNE 2019- JUNE 2022",  
    title:"Deogiri Institute Of Technology AndManagement Studies",  
    city:'AURANGABAD',
    degree:"BCS",  
    percentage:'76.37%',
    desc:"Dr. Babasaheb Ambedkar Marathwada University aut consectetur dignissimos nesciunt consequatur deleniti, ut cum cupiditate sapiente blanditiis quibusdam voluptate dolorum eligendi!",  
    id:"2"
  },
  {
    year:"JUNE 2019- JUNE 2022",  
    title:"Deogiri Institute Of Technology AndManagement Studies",  
    city:'AURANGABAD',
    degree:"BCS",  
    percentage:'76.37%',
    desc:"Dr. Babasaheb Ambedkar Marathwada University aut consectetur dignissimos nesciunt consequatur deleniti, ut cum cupiditate sapiente blanditiis quibusdam voluptate dolorum eligendi!",  
    id:"3"
  }
 ];


  return <>

{
  education.map(item => (
<Card 
data-aos="fade-up"
     data-aos-duration="3000"
      sx={{backgroundColor:"#080808", color:"white", padding:'22px', height: "250px", marginBottom:"18px"}} >
        <Box >
        <span className="badges">{item?.year}</span>
        </Box>
      <CardContent>
        <Typography variant="body1">{item?.title}</Typography>
        <Typography variant="h6" sx={{color:"#DA70D6"}}>{item?.degree} :{item?.percentage}</Typography>
        <Typography variant="body2" sx={{marginTop:"10px"}}>{item?.desc}</Typography>
      </CardContent>
    </Card>

  ))
}

  </>
}

export default Qualifications