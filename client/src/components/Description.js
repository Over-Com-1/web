import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";

const ProjectsPage = () => {
  return (
    <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Welcome To Our Web Page!
        </h2>
        <p className="grey-text w-responsive text-center mx-auto mb-5">
          If you want to play basketball but there are no people to play with, use our website!
        </p>

        <MDBRow>
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <img
              src="https://res.cloudinary.com/grohealth/image/upload/f_auto,fl_lossy,q_auto/v1581678662/DCUK/Content/iStock-959080376.jpg"
              alt=""
              className="img-fluid rounded z-depth-1"
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon far icon="chart-bar" size="2x" className="indigo-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Advantage</h5>
                <p className="grey-text">
                  You can play basketball whenever you want. Forget that you couldn't
                  play basketball because of using this system!
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="music" size="2x" className="pink-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Reservation</h5>
                <p className="grey-text">
                 Reserve an use the courts you want to use. You can play basketball with
                 strangers or friends by using this system!
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon far icon="smile" size="2x" className="blue-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Profile</h5>
                <p className="grey-text">
                  We provide your game records. Use your personal records to know and develop your skills!
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
       
      </section>
  );
}

export default ProjectsPage;