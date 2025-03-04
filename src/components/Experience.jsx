import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import "./../assets/css/resume.css"

const Experience = () => {

  const experiences = [

    {
      year:"January 2023 - January 2024",  
      compunyName:"Skillhub It Solutions",  
      role:"Worked as MERN Stack Developer",  
      desc:"Built an e-commerce platform using MERN stack, integrating Razorpay for secure payments and Gmail for user verification, resulting in a 30% increase in conversion rates. Designed scalable database solutions using Node.js and MongoDB, reducing API response times by 30% during peak traffic. Implemented JWT for secure user authentication",
      id:"1"
    },
    {
      year:"February 2024 - November 2024",  
      compunyName:"gofloww",  
      role:"Worked as Frontend Developer",  
      desc:"Developed and maintained a console website for accounting, mail, and HR modules, increasing productivity by 75% and reducing errors by 20%. Designed responsive user interfaces using Vue.js, converting Figma designs into high performance web applications optimized for desktop and mobile devices. Implemented real-time analytics for task assignment and attendance monitoring, improving operational efficiency by 30%. Collaborated with cross-functional teams to deliver user centric web applications on time, ensuring high-quality results. Contributed to the development of the Raru Group website, enhancing user experience and engagement",
      id:"2"
    },
    {
      year:"December 2024 - March 2024",  
      compunyName:"Banao Technologies,",  
      role:"Worked as Frontend Developer",  
      desc:"Developing a Student Management System using Next.js & Tailwind CSS, focusing on a user-friendly UI. Currently, I am working on Student Registration & Attendance Tracking feature.",
      id:"2"
    },
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