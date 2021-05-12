import React, {Fragment} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter, MDBBtnFixed, MDBBtnFicedItem } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css'
import 'font-awesome/css/font-awesome.min.css';

const SignIn = () => {
  return (
    <MDBContainer>
      <MDBRow className="w-50">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h4 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h4>
              </div>
              <div className="grey-text text-left">
              <MDBInput
                label="ID"
                icon="user"
                size="lg"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                className="test1"
              />
              <MDBInput
                label="Password"
                icon="lock"
                size="lg"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              </div>
              <p className="font-small blue-text d-flex justify-content-end pb-3">
                Forgot
                <a href="#!" className="blue-text ml-1">

                  Password?
                </a>
              </p>
              <div className="text-center mb-3">
                  <Fragment>
                <MDBBtn
                  type="button"
                  color="black"
                  rounded
                  size="lg"
                  className="btn-block z-depth-1a "
                >
                  Sign in
                </MDBBtn>
                </Fragment>
              </div>
              <p className="font-l dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="#!" className="blue-text ml-1">

                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignIn;