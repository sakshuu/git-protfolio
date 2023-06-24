import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import "./../assets/css/resume.css"

const Experience = () => {

  const experiences = [
    {
      year:"October 2022 - March 2023",  
      compunyName:"Skillhub It Solutions",  
      role:"Worked as React Js intern",  
      desc:'AURANGABAD',
      id:"1"
    }
   ];
  

  return <>
  {
    experiences.map(item=> (
<Card 
data-aos="fade-down"
data-aos-duration="3000"
sx={{backgroundColor:"#080808", color:"white", padding:'22px', height: "250px"}} >
  <Box        data-aos="flip-up"
       data-aos-duration="2000" >
          <span className="badges">{item?.year}</span>
  </Box>
      <CardContent>
   <Typography gutterBottom variant="body1" >{item?.compunyName}</Typography>
        <Typography variant="h6" sx={{color:"#DA70D6"}}>{item?.role}</Typography>
        <Typography variant="body2" sx={{marginTop:"10px"}}>{item?.desc}</Typography>
      </CardContent>
    </Card>

    ))
  }
  </>
}

export default Experience