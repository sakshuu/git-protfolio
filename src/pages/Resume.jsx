import React from 'react'
import { Experience, Qualifications } from '../components'
import { Box,  Container,  Grid, Typography } from '@mui/material'

const Resume = () => {
  return <>
  <Box className="gradient">
<Container>
  <Typography variant="h3" className='heading' component="h3" >Resume</Typography>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}} >

  <Grid item  sm={6} md={6}  >
  <Typography variant="h4" className='heading' component="h4" sx={{marginBottom:"25px"}}>Qualifications</Typography>
  <Qualifications/>
    </Grid>

  <Grid item  sm={6} md={6} >
  <Typography variant="h4" className='heading' component="h4" sx={{marginBottom:"25px"}}>Working Experience</Typography>
  <Experience/>
    </Grid>

    </Grid>
</Container>

  </Box>
  </>
}

export default Resume