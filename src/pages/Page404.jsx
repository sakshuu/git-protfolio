import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Button, Typography, Container, Box, styled } from '@mui/material';
import pageNF from "./../assets/images/pageNF.png";


const StyledContent = styled('div')(({ }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));
const Page404 = () => {
  return <>
  <Box className="gradient">
  <Container>
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph className='pageNotFond'>
            Sorry, page not found!
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? 
           <Typography variant='span' className='bolded'> Be sure to check your spelling.</Typography> 
          </Typography>
          <Box
            component="img"
            src={pageNF}
            sx={{ height: 200, m:0, my: { xs: 5, sm: 10 } }}/>
          <Button to="/" size="large" variant="contained" color="secondary" component={RouterLink}>
            Go to Home
          </Button>
        </StyledContent>
      </Container>
  </Box>
  </>
}

export default Page404