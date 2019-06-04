import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./style.scss"
import SlideArrow from"./sliderarrow"
export default class MultipleItems extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: true,
        prevArrow: <SlideArrow to="prev"/>,
        nextArrow: <SlideArrow to="next"/>,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
       
      };
      return (
        <div>
          <Slider arrowstyle={{Padding:'10px'}} {...settings}>
            <div>
              <img src="https://thumbs.dreamstime.com/t/basketball-court-ball-middle-61506071.jpg" width="180 " height="200"></img>
              <div >
              <h8 >Basketball Board</h8>
              <p>₹499</p>
          </div>
            </div>
            <div>
            <img src="https://i.etsystatic.com/6532829/d/il/b84d78/1827104048/il_340x270.1827104048_obwu.jpg?version=1" width="180" height="200"></img>
            <div >
            <h8 >Unicorn Book Marks</h8>
            <p>₹499</p>
        </div>
            </div>
            <div>
            <img src="https://i.etsystatic.com/iap/cfefd3/1891154745/iap_300x300.1891154745_rnb054zw.jpg?version=0" width="180" height="200"></img>
            <div >
            <h8 >Hanging Pot</h8>
            <p>₹499</p>
        </div>
            </div>
            <div>
            <img src="https://i.etsystatic.com/19879012/d/il/b10793/1827797664/il_340x270.1827797664_1lzn.jpg?version=0" width="180" height="200"></img>
            <div >
            <h8 >Avengers Wall Watch</h8>
            <p>₹499</p>
        </div>
            </div>
            <div>
            <img src="https://i.etsystatic.com/19879450/d/il/8cc6b6/1825907440/il_340x270.1825907440_9mlg.jpg?version=0" width="180" height="200"></img>
            <div >
            <h8 >Crystal Pen Stand</h8>
            <p>₹499</p>
        </div>
            </div>
            <div>
            <img src="https://i.etsystatic.com/19890694/d/il/89324e/1875775251/il_340x270.1875775251_ebqy.jpg?version=0" width="180" height="200"></img>
            <div >
            <h8 >Hanging Watch</h8>
            <p>₹499</p>
        </div>
            </div>
          </Slider>
        </div>
      );
    }
}


