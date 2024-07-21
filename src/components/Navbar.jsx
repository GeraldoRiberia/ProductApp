import React from 'react'
import { Box, Toolbar, AppBar, IconButton, Typography , Button} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    const navigate = useNavigate();
    return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar id="appBar"position="static">
        <Toolbar>
          <IconButton
            onClick={()=>{navigate('/')}}
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
          >
        <HomeIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Button onClick={()=>{navigate('/add')}} color="inherit">Add</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar