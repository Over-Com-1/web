import React, { useState } from 'react';
//import { Navbar, Nav, Form, FormControl, Button,NavDropdown } from 'react-bootstrap';  /*이거못줄이나? navbar 사용 위해서 import*/
//import 'bootstrap/dist/css/bootstrap.min.css'; //navbar 꾸미기 위해서 import
import {AppBar, Toolbar, IconButton, Typography, Button, MenuList, NativeSelect, Menu, MenuItem, ListItemIcon, ListItemText,withStyles} from '@material-ui/core';
import {styled} from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { Subway,Mail,Inbox,Send,Movie} from '@material-ui/icons';
import './nav.css';
import {useStyles} from './navstyle';
import CarouselPage from './carousel';




function Navigation() {
  
  const classes=useStyles();
  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);
  
  const [state, setState] = useState(null);

  /*const handleClose = () => {
    setState(state=>!state);
    console.log(state);

  }*/
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar className={classes.Appbar}>
       <Toolbar>
              <Button  aria-controls="simple-menu" aria-haspopup="true" className={classes.menubutton} onClick={handleClick}>
                <Movie />
                </Button>
                  <Typography className={classes.name}>
                     movie
                  </Typography>
                  <div className="buttons">
                  <Link to="/Review">
                  <Button className={classes.button}>
                  review
                </Button>
                </Link>
                  <Link to="/SignIn">
                  <Button className={classes.button}>
                  LOGIN
                </Button>
                </Link>
                <Link to='/SignUp'>
                <Button className={classes.button}>
                      Sign up
                </Button>
                </Link>
                <Link to='/testing'>
                <Button className={classes.button}>
                      Test
                </Button>
                </Link>
                </div>
         </Toolbar>
      </AppBar>
      <CarouselPage/>


      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      > 
       <StyledMenuItem>
          <ListItemIcon>
            <Send fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <Mail fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Signup" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <Inbox fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="About" />
        </StyledMenuItem>
      </Menu>
     
      
      
</>
  );
}

export default Navigation;