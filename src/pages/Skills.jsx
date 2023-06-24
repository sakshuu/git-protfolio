import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import html from "./../assets/images/skills/html.png";
import html5 from "./../assets/images/skills/html5.png";
import css from "./../assets/images/skills/css.png";
import javascript from "./../assets/images/skills/javascript.png";
import react from "./../assets/images/skills/react.png";
import redux from "./../assets/images/skills/redux.png";
import bootstrap from "./../assets/images/skills/bootstrap.png";
import material_ui from "./../assets/images/skills/material_ui.png";
import tailwind_css from "./../assets/images/skills/tailwind_css.png";
import github_icon from "./../assets/images/skills/github_icon.png";
import express_js from "./../assets/images/skills/express_js.png";
import mongodb from "./../assets/images/skills/mongodb.png";
import nodejs from "./../assets/images/skills/nodejs.png";
import typescript from "./../assets/images/skills/typescript.png";
import "./../assets/css/skills.css"

const Skills = () => {

  const techSkills = [
    { 
      id:1,
      icons:html,  
      name:"HTML"
    },
    { 
      id:2,
      icons:html5, 
      name:"HTML5" 
    },
    { 
      id:3,
      icons:css, 
      name:"CSS" 
    },
    { 
      id:4,
      icons:javascript, 
      name:"JAVASCRIPT" 
    },
    { 
      id:5,
      icons:react, 
      name:"REACT.JS" 
    },
    { 
      id:6,
      icons:redux, 
      name:"REDUX" 
    },
    { 
      id:7,
      icons:bootstrap,  
      name:"BOOTSTRAP-5"
    },
    { 
      id:8,
      icons:material_ui,  
      name:"MATERIAL-UI"
    },
    { 
      id:9,
      icons:tailwind_css,  
      name:"TAILWIND-CSS"
    },
    { 
      id:10,
      icons:github_icon, 
      name:"GITHUB" 
    },
    { 
      id:11,
      icons:express_js, 
      name:"EXPRESS-JS" 
    },
    { 
      id:12,
      icons:nodejs, 
      name:"NODE-JS" 
    },
    { 
      id:13,
      icons:mongodb, 
      name:"MONGODB" 
    },
    { 
      id:14,
      icons:typescript, 
      name:"TYPESCRIPT" 
    },
                      ];

  return <>
<Box className="gradient">

  <Typography variant="h3" className='heading' component="h3" >Skills</Typography>
  <Box className="skill">

  <Container>
  <Grid container spacing={{ xs: 3, md: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>
      {
        techSkills &&  techSkills.map((item) => <>
    <Grid key={techSkills} item xs={6} sm={3} md={2} className="techskill">
      <img 
       data-aos="flip-up"
       data-aos-duration="2000" 
       src={item?.icons} alt="" classname='skillimg' height={100} width={100}/>
       <Typography  variant='h6' component='h6'      data-aos="flip-up"
       data-aos-duration="2000" >{item.name}</Typography>
      </Grid>
     </>
      )
    }
    </Grid>
  </Container>
      </Box>
</Box>
  </>
}

export default Skills