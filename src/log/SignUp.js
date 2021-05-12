import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css'
import 'font-awesome/css/font-awesome.min.css';




const SignUp = () => {
return (
      <MDBContainer >
        <MDBRow className="w-50">
          <MDBCol md="12">
            <MDBCard>
              <MDBCardBody>
                
                <form>
                  <p className="h4 text-center py-3">Sign up</p>
                  <div className="grey-text text-left">
                    <MDBInput 
                      label="ID"
                      icon="user"
                      size="lg"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Email"
                      icon="envelope"
                      size="lg"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Password"
                      size="lg"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                    <MDBInput
                      label="Confirm your password"
                      size="lg"
                      icon="exclamation-triangle"
                      group
                      type="password"
                      validate
                      error="wrong"
                      success="right"
                    />
                  </div>
                  <div className="text-center py-9 mt-9">
                    <MDBBtn color="black" type="submit" size="lg" > 
                      Register
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };

export default SignUp;