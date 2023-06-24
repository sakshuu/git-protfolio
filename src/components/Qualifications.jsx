import { Badge, Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import "./../assets/css/resume.css"

const Qualifications = () => {
  
const education = [
  {
    year:"JUNE 2019- JUNE 2022",  
    title:"Deogiri Institute Of Technology AndManagement Studies",  
    city:'AURANGABAD',
    degree:"Bachlar of computer science / BCS",  
    percentage:'76.37%',
    desc:"I have successfully completed my Bachelor of Computer Science degree from D.I.T.M.S College and Dr. Babasaheb Ambedkar Marathwada University, achieving a remarkable percentage of 77%",  
    id:"1"
  },
  {
    year:"MARCH 2018- MARCH 2019",  
    title:"AVS Jr. college",  
    city:'AURANGABAD',
    degree:" H.S.C(SCI.)",  
    percentage:'- 69.06 %',
    desc:"I have successfully completed my Higher Secondary School in science from AVS jr. College and Maharashtra State Board, achieving a remarkable percentage of 70%",  
    id:"2"
  },
  {
    year:"MARCH 2016- MARCH 2017",  
    title:"Ujwalatai Pawar School",  
    city:'AURANGABAD',
    degree:"S.S.C",  
    percentage:'78.40 %',
    desc:"I have successfully completed my Secondary School Certificate from Ujwalatai Pawar School and Maharashtra State Board, achieving a remarkable percentage of 79%",  
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