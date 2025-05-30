import { AppBar, Box,Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position = "static"
      style={{ backgroundColor: 'green' }}>
        <Toolbar>
          <Typography variant="h5" component="div" 
          sx={{ flexGrow: 1, textAlign: 'left' }}
          style={{color:'white', fontFamily:'Ariel',}}>
            Blog Application
          </Typography>
        
          <Button>
            <Link to={'/homepage'} style={{color:'white'}}>HomePage</Link>
          </Button>
          <Button>
            <Link to={'/addblog'} style={{color:'white'}}>AddBlog</Link>
          </Button>


        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar
