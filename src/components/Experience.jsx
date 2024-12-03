import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import "./../assets/css/resume.css"

const Experience = () => {

  const experiences = [

    {
      year:"January 2023 - october 2023",  
      compunyName:"Skillhub It Solutions",  
      role:"Worked as React Js & UI intern",  
      desc:"During my internship, I worked on an e-commerce project, managing state with Redux, implementing authentication, integrating APIs with Axios, and utilizing UI libraries like Material UI and Bootstrap for improved design and user experience. Skills - ReactJS, Redux, NodeJS, MongoDB, Material-UI, JS, CSS.",
      id:"1"
    },
    {
      year:"February 2024 - present",  
      compunyName:"gofloww",  
      role:"Worked as Frontend Developer",  
      desc:"launched and maintained a console website for HR, Mail, and Accounting modules, increasing efficiency by 75% and reducing errors. Contributed to 80% revenue growth in three months by planning and launching four key features. Built responsive UIs based on Figma designs using Vue.js, ensuring seamless functionality across desktop and mobile. Implemented task assignment and attendance tracking features with real-time analytics. Delivered additional projects, such as the Raru Group website, converting Figma designs into responsive, functional web applications",
      id:"2"
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