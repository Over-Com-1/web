import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slides.css';

function Slides() {

  const Images = [
    "/images/movie1.jpg",
    "/images/movie2.jpg",
    "/images/movie3.jpg"
  ];

  const Properties = {
    indicators: true,
    indicators: i => (<div className="indicator">{i + 1}</div>)
  }

  return (
    
    <div className="slide-container">
        <Fade {...Properties}>
          <div className="each-fade">
            <div className="movie_image">
              <h3>Dark Knight</h3>
              <img src={Images[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="movie_image">
            <h3>Blind Side</h3>
            <img src={Images[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="movie_image">
            <h3>Avengers</h3>
            <img src={Images[2]} />
            </div>
          </div>
        </Fade>
      </div>
  );
}

export default Slides;

/*참조 : https://www.npmjs.com/package/react-slideshow-image*/ 