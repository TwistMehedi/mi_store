import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Slider = ({ start }) => {
  return (
    <div>
      <Carousel fade>
        {start.map(
          (item) =>
            Carousel.Item >
            <img className="d-block w-100" src={item} alt="First slide" />
        )}
      </Carousel>
    </div>
  );
};

export default Slider;
