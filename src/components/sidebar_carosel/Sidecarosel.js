import React, { Component } from "react";
import Slider from "react-slick";

export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
    }
    return (
      <div>
        
        <Slider {...settings}>
          <div>
            <h3><img src="https://images.bewakoof.com/t320/blue-haze-vest-men-s-plain-round-neck-vest-217603-1558958340.jpg" width="450" height="563"></img></h3>
          </div>
          <div>
            <h3><img src="https://images.bewakoof.com/t540/blue-haze-half-sleeve-t-shirt-men-s-plain-t-shirts-217604-1558958374.jpg" width="450" height="563"></img></h3>
          </div>
          <div>
            <h3><img src="https://images.bewakoof.com/t540/men-halfsleeve-tshirt-comparison-1545307065.jpg?id=217604" width="450" height="563" ></img></h3>
          </div>
          <div>
            <h3><img src="https://images.bewakoof.com/t540/blue-haze-half-sleeve-t-shirt-men-s-plain-t-shirts-217604-1558958403.jpg" width="450" height="563" ></img></h3>
          </div>
          <div>
            <h3><img src="https://images.bewakoof.com/t540/blue-haze-half-sleeve-t-shirt-men-s-plain-t-shirts-217604-1558958409.jpg" width="450" height="563" ></img></h3>
          </div>
         
        </Slider>
      </div>
    );
  }
}