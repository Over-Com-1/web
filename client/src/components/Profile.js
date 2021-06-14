import React, {useState, useEffect} from "react";
import NavBar from './NavBar';
import Footer from './Footer';
import {getCurrentUser} from '../app/LocalStorage';
import {  MDBRow,  MDBCard, MDBCardBody,  MDBIcon, MDBCol, MDBCardImage, MDBCardText, MDBCardTitle } from "mdbreact";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UsersList from '../pages/UsersList';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container:{
      display: 'flex',
      width : 650,
      marginLeft: 100,
      marginTop : 100,
  },
  navbar:{
      display: 'flex',
  },
  tables : {
  },
  list : {
    margin : 200,
  },
});

const Profile = () => {
    const [currentUserID, setCurrentID] = useState('');

  useEffect(() => {
    setCurrentID(getCurrentUser());
  }, []);

  const classes = useStyles();
 
  return (
      <>
       
      <NavBar className={classes.navbar}/>
    <MDBRow className="my-5 w-75 ml-auto mr-auto d-flex " >
      <MDBCol md="6" lg="4" >
        <MDBCard personal className="my-5">
          <MDBCardImage
            top
            src="https://d1l5jyrrh5eluf.cloudfront.net/wp-content/uploads/2019/12/GettyImages-1190532307.jpg"
            alt="MDBCard image cap"
          />
          <MDBCardBody>
            <MDBCardTitle>
              <a href="#!" className="title-one">
                {currentUserID}
              </a>
            </MDBCardTitle>
            <p className="card-meta">Joined in 2020</p>
            <hr />
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="6" lg="4" classname={classes.tables} >
        <UsersList />
        </MDBCol>
    </MDBRow>
    <Footer/>
    </>
  );
}

export default Profile;