import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Person2Icon from '@mui/icons-material/Person2';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SettingsIcon from '@mui/icons-material/Settings';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import "./../assets/css/navbar.css"
import { Link} from 'react-router-dom'
import { Tooltip } from '@mui/material';

const MyNavbar = () => {



  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = [
    {
      label:"Home",
      to:"/",
      type:"link",
      icon:<HomeIcon />
    },
    {
      label:"About",
      to:"/about",
      type:"link",
      icon:<InfoIcon/>
    },
    {
      label:"Resume",
      to:"/resume",
      type:"link",
      icon:<TextSnippetIcon/>
    },
    {
      label:"Skills",
      to:"/skills",
      type:"link",
      icon:<SettingsIcon/>
    },
    {
      label:"Projects",
      to:"/projects",
      type:"link",
      icon:<AddLinkIcon/>
    },
    {
      label:"Contact",
      to:"/contact",
      type:"link",
      icon:<AddIcCallIcon/>
    }
                 ]

const settings = [
 {
   icon:<LinkedInIcon/>,  //linkdin
   link:"https://www.linkedin.com/in/sakshi-jadhav-8b6429226/"
 },
 {
   icon:<GitHubIcon/>,  //github
   link:"https://github.com/sakshuu"
 },
 {
   icon:<MarkunreadIcon/>,  //gmail
   link:"https://mail.google.com/mail/?view=cm&to=sakshisjadhav.120@gmail.com"
 }
];

  return <>
<AppBar position='static' className='appbar' sx={{padding:{xs:'16px', sm:"10px"}}}>
      <Container  >
        <Toolbar disableGutters>
          <Person2Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            to="/"
            sx={{
              mr: 2,
            display: { xs: 'none', md: 'flex',  },
              variant: { sm:"body1"},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SAKSHI
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              // size="sm"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages && pages.map((page) => <>
                  <Link to={page.to} textAlign="center" className='nav-link'>
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <IconButton>{page.icon}</IconButton> 
<Typography variant='h6' component='h6'>{page.label}</Typography>
                </MenuItem>
                  </Link>
              </>
              )}
            </Menu>
          </Box>
          <Person2Icon sx={{ display: { xs: 'flex', md: 'none' }, visibility: { xs: "hidden" }}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              // mr: 1,
              ml:0,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 10,
              letterSpacing: '.10rem',
              color: 'inherit',
              variant: { sm:"body2"},
              textDecoration: 'none',
            }}
          >
           SAKSHI
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}>
                <IconButton className='icon-page'>{page.icon}</IconButton>
              <Link to={page.to} textAlign="center" className='nav-link'>{page.label}</Link>
              </Button>
            ))}
          </Box>



          <Box sx={{ flexGrow: 0 }} >
            <Tooltip title="Open settings">
              <Button  variant="contained" className='btn' size='small' onClick={handleOpenUserMenu}>Follow Me</Button>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>

              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <IconButton     className="menu" href={setting.link} target="_blank">
        {setting.icon}
      </IconButton>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  </>
}

export default MyNavbar