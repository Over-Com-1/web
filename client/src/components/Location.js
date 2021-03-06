import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Seoul from '../scedule/seoul';
import Kyunggi from '../scedule/kyunggi';
import UsersInsert from '../pages/UsersInsert';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={10}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Tabs: {
    backgroundColor: 'white',
    color:'black',
    border:'none',
   margin: '0 auto',
  },
  links:{
      width:10,
  },
  container: {
    display: 'flex',
    marginLeft: '100px',
    marginTop: '100px',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
}));

export default function Location() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <form className={classes.container} noValidate>
    
      
    </form>
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          indicatorColor="primary"
          className={classes.Tabs}
        >
          <LinkTab label="??????" href="../scedule/seoul" {...a11yProps(0)} className={classes.links}/>
          <LinkTab label="??????" href="/tuesday" {...a11yProps(1)} className={classes.links}/>
          <LinkTab label="??????" href="/Wendesday" {...a11yProps(2)} className={classes.links}/>
          <LinkTab label="??????" href="/Thursday" {...a11yProps(3)} className={classes.links}/>
          <LinkTab label="?????? " href="/Friday" {...a11yProps(4)} />
          <LinkTab label="?????? " href="/Saturday" {...a11yProps(5)} />
          <LinkTab label="??????" href="/Sunday" {...a11yProps(6)} />
          <LinkTab label="??????" href="/Sunday" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Seoul/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Kyunggi/>
      </TabPanel>
    
  
      
    </div>
    </>
  );
}
