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
const CarouselPage = () => {
  const classes = useStyles();
  return (
    <MDBContainer className={classes.container}>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
      >
        <MDBCarouselInner>
           
          <MDBCarouselItem itemId="1">
            <MDBView >
              <img
                className="d-block w-100 "
                src="https://raw.githubusercontent.com/ParkJiwoo1/ETC/main/street.jpeg?token=AL6GAJUJJNZE7XCBAOENGRDAVSPVU"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://raw.githubusercontent.com/ParkJiwoo1/ETC/main/nba.png?token=AL6GAJRNV5J5AMOU3WNIGZDAVSPSU"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://raw.githubusercontent.com/ParkJiwoo1/ETC/main/wnba.jpeg?token=AL6GAJVLQKUZ5NYJLSYOIWLAVSPXO"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;