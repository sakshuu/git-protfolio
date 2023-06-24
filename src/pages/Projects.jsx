import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import "./../assets/css/myprojects.css"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import youTubeClone from "./../assets/images/projects/youTubeClone.jpg"
import protfolio from "./../assets/images/projects/protfolio.jpg"
import { Link } from 'react-router-dom';


const Projects = () => {

  const projects = [
    {
      title:"My Protfolio",  
      hostedLink:"https://www.linkedin.com/in/sakshi-jadhav-8b6429226/",
      GithubLink:"",
      img: protfolio,
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia natus quae illum omnis ad accusantium perspiciatis impedit quaerat expedita sed quas neque in nisi autem officiis vel, saepe culpa voluptatum quos rerum aspernatur corrupti excepturi. Ipsa et deleniti quos harum.",
      id:1,
    },
    {
      title:"YouTube Clone",  
      hostedLink:"https://www.linkedin.com/in/sakshi-jadhav-8b6429226/",
      GithubLink:"",
      img: youTubeClone,
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia natus quae illum omnis ad accusantium perspiciatis impedit quaerat expedita sed quas neque in nisi autem officiis vel, saepe culpa voluptatum quos rerum aspernatur corrupti excepturi. Ipsa et deleniti quos harum.",
      id:2,
    },
    {
      title:"BollyBook",  
      hostedLink:"https://www.linkedin.com/in/sakshi-jadhav-8b6429226/",
      GithubLink:"",
      img: youTubeClone,
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia natus quae illum omnis ad accusantium perspiciatis impedit quaerat expedita sed quas neque in nisi autem officiis vel, saepe culpa voluptatum quos rerum aspernatur corrupti excepturi. Ipsa et deleniti quos harum.",
      id:3,
    },
    {
      title:"Weather App",  
      hostedLink:"https://www.linkedin.com/in/sakshi-jadhav-8b6429226/",
      GithubLink:"",
      img: youTubeClone,
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia natus quae illum omnis ad accusantium perspiciatis impedit quaerat expedita sed quas neque in nisi autem officiis vel, saepe culpa voluptatum quos rerum aspernatur corrupti excepturi. Ipsa et deleniti quos harum.",
      id:4,
    },
    {
      title:"Tic-tac-too",  
      hostedLink:"https://www.linkedin.com/in/sakshi-jadhav-8b6429226/",
      GithubLink:"",
      img: youTubeClone,
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia natus quae illum omnis ad accusantium perspiciatis impedit quaerat expedita sed quas neque in nisi autem officiis vel, saepe culpa voluptatum quos rerum aspernatur corrupti excepturi. Ipsa et deleniti quos harum.",
      id:5,
    },
    {
      title:"Student Management",  
      hostedLink:"https://www.linkedin.com/in/sakshi-jadhav-8b6429226/",
      GithubLink:"",
      img: youTubeClone,
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia natus quae illum omnis ad accusantium perspiciatis impedit quaerat expedita sed quas neque in nisi autem officiis vel, saepe culpa voluptatum quos rerum aspernatur corrupti excepturi. Ipsa et deleniti quos harum.",
      id:6,
    }
    
                     ];

  return <>

  <Box className="gradient">
  <Typography variant="h3" className="heading" component="h3">
          My Projects
        </Typography>
 <Container maxWidth="xl">

 <Grid container  spacing={2} columns={12} sx={{marginTop:"20px"}}>
  {
    projects.map(item => (
<Grid item sx={12} sm={12} md={6} >
  <Card 
   data-aos="zoom-in-up"
   data-aos-duration="800"
  sx={{backgroundColor:"#080808", color:"white", padding:'18px', maxHeight: "80vh" }}> 
  <Box data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="projectImg">
      <CardMedia 
        sx={{ height: 250, width:450}}
        image={item?.img}
        title="green iguana"
        />
        </Box>
      <CardContent>
        <Typography className="colorText" gutterBottom variant="h5" component="div">
          {item?.title}
        </Typography>
        <Typography variant="body2" >
{item?.desc}
        </Typography>
      </CardContent>
      <CardActions>

        <Link to={item?.hostedLink}>
<Button variant="contained"
        color="secondary" startIcon={<VisibilityOutlinedIcon/>}>Hosted</Button>
        </Link>

        <Link to={item?.GithubLink}>
<Button variant="contained"
        color="secondary" startIcon={<CodeOutlinedIcon/>}>Github</Button>
        </Link>
      </CardActions>
    </Card>
</Grid>
    ))
  }

</Grid>
        </Container> 
  </Box>
  </>
}

export default Projects