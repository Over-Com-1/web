import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import CarouselCourt2 from './carousel3';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Looks5, People, Wc, SportsBasketball, DirectionsCar} from '@material-ui/icons';
import Map from './Map2';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width:'1200px',
      margin: '0 auto',
    },
    paper: {
        backgroundColor:'lightgray',
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    papers: {backgroundColor:'#E82C42',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  }));
  function FormRow() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>
                <Looks5/><br/>
                5vs5 매치</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
                <Wc/><br/>
                누구나 참여 가능</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.papers}>
                <DirectionsCar/><br/>
                주차 불가능</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>
                <SportsBasketball/><br/>
                농구공 대여</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
                <People/><br/>
                10~15명</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

function Court2(){
    
    const classes = useStyles();

return(
    <>
    <NavBar/>
    <CarouselCourt2/>
    <div className={classes.root}>
        <h4>구장 시설</h4>
     <FormRow/>
    <Map/>
    </div>
    <Footer/>
    </>
)
}
export default Court2;