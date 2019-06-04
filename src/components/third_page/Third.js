import React from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import SwipeToSlide from "../sidebar_carosel/Sidecarosel";
import "./style.scss"
import {Button} from "react-bootstrap";


class Third extends React.Component {

  render() {
    return (
      <div>
      <br></br>
      <br></br>
        <container>
          <Row>
          
            <Col sm={2} className="imgcarosel">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
           <SwipeToSlide/>
            </Col>
            
            <Col sm={4} className="seconddiv">
              <br></br>
              <br></br>
              <img src="https://images.bewakoof.com/t320/blue-haze-vest-men-s-plain-round-neck-vest-217603-1558958340.jpg" width="450" height="563" style={{marginTop:"-43px"}}></img>
            </Col>

            <Col sm={6} className="halfcol">
              <div className="text">
                <br></br>
                <br></br>
                <h10><b>Striped Captain America Half Sleeve T-Shirt (AVL)</b></h10>
                <h1>₹299</h1>
                <h6>40 % OFF</h6>
                <p>Inclusive of all taxes</p>
              </div>

              <br></br>

              <div>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
             </div>

              <div>
              <span>Select Size</span>
              <div   className="sizebutton" style={{width:"500px" }}>
              <button type="button"class="button button1">S</button>
              <button type="button"class="button button1">M</button>
              <button type="button"class="button button1">L</button>
              <button type="button"class="button button1">XL</button>
              <button type="button"class="button button1">XXL</button>
              <button type="button"class="button button1">XXXL</button>
              </div>
              <br></br>
              <br></br>
              <div className="addbutton"  style={{width:"500px" }}>
              <button type="button" class="button button1">XXL</button>
              <button type="button" class="button button1">XXXL</button>
              </div>
              </div>
              <br></br>
              <div className="cod">
              <p>Check delivery date / COD availability</p>
              <div className="input-body">
              <form>
               <input type="text" name="pin"  placeholder="Enter Pincode" maxlength="6"/>
               <input type="submit" value="Check"/>
              </form>
              </div>
              </div>

              
             
             


              

              <br></br>

              


            </Col>

          </Row>
        </container>

        <br></br>
        <br></br>

        <container>
          <Row className="secondrow">
            <Col sm={2} ></Col>
            <Col sm={2} className="colsize">
              <br></br>
              <h8><b>REGULAR FIT</b></h8>
              <br></br>
              <h8>Fits just right - not too tight, not too loose.</h8>
              <br></br>
              <br></br>
              <h8><b>SINGLE JERSEY, 100% COTTON</b></h8>
              <br></br>
              <h8>Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.</h8>
            </Col>
            <Col sm={2} className></Col>

            <span className="block-example border-right border-darkgrey"></span>

            <Col sm={1}></Col>
            <Col sm={2} className="colsize1">
              <br></br>
              <h8><b>CASHBACK INFO</b></h8>
              <br></br>
              <h8>Bewakoof coins cannot be redeemed on already discounted products.</h8>
              <br></br>
              <br></br>
              <h8><b>15 DAY RETURNS</b></h8>
              <br></br>
              <h8>If you arent satisfied with this product, return it for a refund.</h8>
            </Col>
            <Col sm={3}></Col>
          </Row>
        </container>

        <br></br>
        <br></br>


        <div id="content" class="clear" role="main">
          <div data-apperas-component-name="shubham">
            <div>
              <h4 className="thirdtext">RECENTLY VIEWED</h4>
              <container>

                <Row className="thirdrow" >

                  <Col md={3}>
                    <img src="https://images.bewakoof.com/t320/aqua-green-half-sleeve-t-shirt-men-s-plain-t-shirts-214825-1556617184.jpg" width="253" height="315">
                    </img>
                    <div >
                      <h10 >Beard Man Half Sleeve T-Shirt</h10>
                      <p>₹499</p>
                    </div>
                  </Col>

                  <Col md={3}>
                    <img src="https://images.bewakoof.com/t320/wink-new-sweatshirt-men-s-printed-crewneck-sweatshirts-aw18-204714-1550226508.jpg" width="253" height="315"
                    ></img>
                    <div >
                      <h10 >Beard Man Half Sleeve T-Shirt</h10>
                      <p>₹499</p>
                    </div>
                  </Col>

                  <Col md={3}>
                    <img src="https://images.bewakoof.com/t320/minimal-hope-infinity-essential-mini-backpack-essential-printed-mini-backpacks-215106-1557308769.jpg" width="253" height="315">
                    </img>
                    <div >
                      <h10 >Beard Man Half Sleeve T-Shirt</h10>
                      <p>₹499</p>
                    </div>
                  </Col>

                  <Col md={3}>
                    <img src="https://images.bewakoof.com/t320/beard-man-half-sleeve-t-shirt-men-s-printed-t-shirts-215397-1555762460.jpg" width="253" height="315">
                    </img>
                    <div >
                      <h10 >Beard Man Half Sleeve T-Shirt</h10>
                      <p>₹499</p>
                    </div>
                  </Col>

                </Row>


              </container>
            </div>
          </div>
        </div>
      </div>

     






      


    )
  }
}

export default Third;