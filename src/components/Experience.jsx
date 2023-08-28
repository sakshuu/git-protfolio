import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import "./../assets/css/resume.css"

const Experience = () => {

  const experiences = [

    {
      year:"January 2023 - july 2023",  
      compunyName:"Skillhub It Solutions",  
      role:"Worked as React Js & UI intern",  
      desc:"During my internship, I worked on an e-commerce project, managing state with Redux, implementing authentication, integrating APIs with Axios, and utilizing UI libraries like Material UI and Bootstrap for improved design and user experience. Skills - ReactJS, Redux, NodeJS, MongoDB, Material-UI, JS, CSS.",
      id:"1"
    }
   ];
  return <>
  {
    experiences.map(item=> (
<Card 
data-aos="fade-down"
data-aos-duration="3000"
sx={{backgroundColor:"#080808", color:"white", padding:'22px', minHeight: "250px", marginTop:"15px"}} >
  <Box>
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