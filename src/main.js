import React from 'react';
import Navigation from './nav/nav';
import Footer from './footer/footer';
import InitMap from './nav/map';
import styled from "styled-components";
import MyComponent from './nav/test';
import { Button } from '@material-ui/core';

const mapstyle= styled.div`
  width:100px;
  background-color:black;
  display:flex;
  margin-left:100px;
  margin: 0 auto;
  `
function main(){
  
    return(
      <>
        <Navigation/>
        <div className="name">
        Location
        </div>
        <mapstyle>
        <MyComponent/>
        </mapstyle>
       
        
        <Footer/>
        
	</>
    

    
);
}

export default main;

