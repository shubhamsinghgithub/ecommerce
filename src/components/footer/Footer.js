import React from "react";
import { Card, Container, Row, Col,ListGroup } from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Dropdown
} from "react-bootstrap";
import './style.scss';
function Footer() {
  return (

    <div class="table table-borderless table-dark">
    <br></br>
      <footer class="footer">
        <div class="container bottom_border">
          <div class="row">

            <div class=" col-xs-2 col-sm-4 col-md col-sm-4  col-12 col">
              <h6 class="" style={{color: "yellow" }}>CUSTOMER SERVICE</h6>
              <ul class="first">
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Track Order</a></li>
                <li><a href="#">Return Order</a></li>
                <li><a href="#">Cancel Order</a></li>
              </ul>
            </div>


            <div class="col-xs-2 col-sm-4 col-md  col-6 col">
              <h6 class="" style={{ color: "yellow" }}>COMPANY</h6>
              <ul class="second">
                <li><a href="#">About Us</a></li>
                <li><a href="#">We're Hiring</a></li>
                <li><a href="#">Terms & conditions</a></li>
                <li><a href="#">Privacy Ploicy</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Image Cropping</a></li>
              </ul>
            </div>


            <div class="  col-xs-2 col-sm-4 col-md  col-6 col"> 
              <h6 class="" style={{  color: "yellow" }}>CONNECT  WITH  US</h6>
                <ol class="third">
                <li><a href="#">Remove Background</a></li>
                <li><a href="#">Shadows & Mirror Reflection</a></li>
                <li><a href="#">Logo Design</a></li>
                <li><a href="#">Vectorization</a></li>
                <li><a href="#">Hair Masking/Clipping</a></li>
                <li><a href="#">Image Cropping</a></li>
                </ol>
            </div>

            <div class="  col-xs-2 col-sm-4 col-md  col-12 col">
            <h6 class="headin5_amrc col_white_amrc pt2" style={{  color: "yellow" }}>KEEP UP TO DATE 
            </h6>
          </div>
          </div>
        </div>
      </footer>



      <footer class="footer">
      <div class="container bottom_border">
        <div class="row">

          <div class="col-xs-2 col-sm-4 col-md col-sm-4  col-12 col">
            
          <ul class="fourth" >

              <li><a href="#" >15 Days return Policy</a></li>
              <li><a href="#">Cash on delivery</a></li>
              <li><a href="#"> Pay online & get free shipping.</a></li> 
              
            </ul>
          </div>

          <div class="  col-xs-2 col-sm-4 col-md  col-6 col">
            <h6 class="fifth" style={{  color: "yellow" }}>DOWNLOAD THE APP</h6>
            <div class="android">
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.bewakoof.bewakoof&amp;hl=en">
            <img src="https://images.bewakoof.com/web/app_android_v1.png" title="android app" alt="android app" width="100px" class="hidden-xs"/>
            <img src="https://images.bewakoof.com/web/android-2x.png" title="android app" alt="android app" width="24px" class="visible-xs"/>
            </a>
            </div>
            <br></br>
            <div class="ios">
            <a target="_blank" href="https://itunes.apple.com/in/app/bewakoof/id1100190514?mt=8">
            <img src="https://images.bewakoof.com/web/app_ios_v1.png" title="ios app" alt="ios app" width="100px" class="hidden-xs"/>
            <img src="https://images.bewakoof.com/web/apple-2x.png" title="ios app" alt="ios app" width="24px" class="visible-xs"/>
            </a>
            </div>

            </div>
            <br></br>
          <div class=" col-xs-2 col-sm-4 col-md  col-6 col">
            <h6 class="sixth" style={{  color: "yellow" }}>100% SECURE PAYMENT</h6>
            <div class="payment">
            <img class="paymentImg" src="https://images.bewakoof.com/web/secure-payments-image.png" title="secure payments" alt="secure payments">
            </img>
            </div>
           
          </div>
          
          <div class="  col-xs-2 col-sm-4 col-md  col-6 col">
          <h6 class="headin5_amrc col_white_amrc pt2">    </h6>
        </div>
           
      </div>
      </div>
      
    </footer>
      </div>

   
  )
}
export default Footer;
