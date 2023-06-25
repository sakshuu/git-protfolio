import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import "./../assets/css/skills.css"
import { bootstrap, css, express_js, github_icon, html, html5, javascript, material_ui, mongodb, nodejs, react, redux, sass, tailwind_css, typescript } from '../assets/images/skills';

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
      icons:sass,  
      name:"SASS"
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
      icons:bootstrap,  
      name:"BOOTSTRAP-5"
    },
    { 
      id:11,
      icons:github_icon, 
      name:"GITHUB" 
    },
    { 
      id:12,
      icons:express_js, 
      name:"EXPRESS-JS" 
    },
    { 
      id:13,
      icons:nodejs, 
      name:"NODE-JS" 
    },
    { 
      id:14,
      icons:mongodb, 
      name:"MONGODB" 
    },
    { 
      id:15,
      icons:typescript, 
      name:"TYPESCRIPT" 
    },
                      ];

  return <>
<Box className="gradient">

  <Typography variant="h3" className='heading' component="h3" >Skills</Typography>
  <Box className="skill">

  <Container maxWidth="xl">
    <Grid container spacing={2}>
      {
        techSkills &&  techSkills.map((item) => <>
    <Grid key={techSkills} item xs={6} sm={3} md={2} className="techskill">
      <img 
       data-aos="flip-up"
       data-aos-duration="2000" 
       src={item?.icons} alt="" classname='skillimg' height={100} width={100}/>
       <Typography  variant='h6' component='h6'
      data-aos="flip-up"
      data-aos-duration="2000" 
      >{item.name}</Typography>
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