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
const CarouselCourt2 = () => {
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
                src="https://moplqfgeemqv2103108.cdn.ntruss.com/pstatic-scloud/20190208_103/15496106120373pikt_JPEG/1.jpg?type=m&w=600&h=600&autorotate=true&quality=70"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://moplqfgeemqv2103108.cdn.ntruss.com/pstatic-scloud/20190208_14/1549611396687MH0bN_JPEG/%2525B1%2525D7%2525B8%2525B26.jpg?type=m&w=600&h=600&autorotate=true&quality=70"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselCourt2;