/*import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./style.scss"
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      cycle : true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3><img src="https://i.etsystatic.com/16132607/r/il/0bca0a/1391243158/il_794xN.1391243158_4hrd.jpg" width="520"  height="320" ></img></h3>
          </div>
          <div>
            <h3><img src="https://images.bewakoof.com/uploads/grid/app/Hottest-seller-men-1554709275.jpg" width="520" height="320"></img> </h3>
          </div>
          <div>
            <h3><img src="https://images.bewakoof.com/uploads/grid/app/Hottest-seller-women-1555495071.jpg" width="520"  height="320"></img></h3>
          </div>
          <div>
            <h3><img src="https://i.etsystatic.com/13877822/r/il/6563ce/1704349498/il_794xN.1704349498_jbbl.jpg" width="520" height="320"></img></h3>
          </div>
          <div>
            <h3><img src="https://i.etsystatic.com/11739370/r/il/c1bf2e/1597432490/il_794xN.1597432490_c1zn.jpg" width="520"  height="320"></img></h3>
          </div>
          <div>
            <h3><img src="https://images.bewakoof.com/uploads/grid/app/women-plus-size-desktop-1548248387.jpg" width="520" height="320"></img></h3>
          </div>
        </Slider>
      </div>
    );
  }
}*/

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      cycle: true,
      autoplay:true,
      autoplayspeed:500,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

    };

    const images = [
      <img className="corimg"
        src="https://i.etsystatic.com/16132607/r/il/0bca0a/1391243158/il_794xN.1391243158_4hrd.jpg"
        
       
      />,
      <img className="corimg"
        src="https://images.bewakoof.com/uploads/grid/app/Hottest-seller-men-1554709275.jpg"
        
      />,
      <img className="corimg"
        src="https://images.bewakoof.com/uploads/grid/app/Hottest-seller-women-1555495071.jpg"
       
      />,
      <img className="corimg"
        src="https://i.etsystatic.com/13877822/r/il/6563ce/1704349498/il_794xN.1704349498_jbbl.jpg"
       
      />,
      <img className="corimg"
        src="https://i.etsystatic.com/11739370/r/il/c1bf2e/1597432490/il_794xN.1597432490_c1zn.jpg"
       
      />,
      <img className="corimg"
        src="https://images.bewakoof.com/uploads/grid/app/women-plus-size-desktop-1548248387.jpg"
       
      />
    ];

    return (
      <div>
        <h2> </h2>
        <Slider {...settings}>
        
          {images.map(value => (
            <div>
              <h3>{value}</h3>
            </div>
            
          ))}
          
        </Slider>
      </div>
    );
  }
}