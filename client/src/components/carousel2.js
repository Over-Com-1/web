import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import './carousel.css'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  container: {
   // border: 'none',
  },
});
const CarouselCourt = () => {
  const classes = useStyles();
  return (
    <MDBContainer className={classes.container}>
      <MDBCarousel
        activeItem={1}
        length={2}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
      >
        <MDBCarouselInner>
           
          <MDBCarouselItem itemId="1">
            <MDBView >
              <img
                className="d-block w-100 "
                src="https://raw.githubusercontent.com/ParkJiwoo1/ETC/main/court2.jpeg"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://raw.githubusercontent.com/ParkJiwoo1/ETC/main/court1.jpeg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselCourt;