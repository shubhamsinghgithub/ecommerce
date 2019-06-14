import React from 'react';
import "./style.scss"
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Dropdown
} from "react-bootstrap";
import {FaCircle,} from 'react-icons/fa'
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import Header from "./components/header/Header";
// import Footer from "./footer/Footer";
import modal from "react-modal"
import SimpleSlider from "../carousel/sliding";
import { Card, Container, Row, Col } from "react-bootstrap";
import MultipleItems from '../carousel/multi_sliding';
import Responsive from '../carousel/multi_sliding';

class Box extends React.Component {
  render() {
    return (
      <div className="App">
        <body>
          <div id="content" class="clear" role="main">
            <div data-apperas-component-name="shubham">
              <div class="title-horizontal-center">
                <h2 class="text-center pr-xs-2 pl-xs-2 pb-xs-0 pt-xs-4 pb-md-1 pt-md-4">If it’s handcrafted, vintage, custom or unique.</h2>

              </div>
            </div>
          </div>
          <br></br>

          <div>
            <div className="carousel-container">
              <Row>
                <Col md="8">
                  <Row>
                    <Col className="carousel-lefttext left-div " xs="12" sm="2" md="4" lg="4" >
                      <div class="title-horizontal-center">
                        <h5 class=" text-center">
                          “Shopping is better than sex. If you’re not satisfied after shopping you can make an exchange for something you really like" </h5>
                      </div>
                    </Col>
                    
                    <Col className="carousel-div right-div" xs="12" sm="6" md="8" lg="8"><SimpleSlider /></Col>
                  </Row>
                </Col>

                <Col className="Carousel-right" md="4">
                  <div class="hero-full-bleed-pane height-full">
                    <div class="visuals position-absolute width-full height-full overflow-hidden">
                      <picture>
                        <img className="carosalimg" src="https://images.bewakoof.com/uploads/grid/app/aqua-green-join-the-waitlist-desktop-box-1556788650.jpg"
                           height="220"
                         />
                        <br></br>

                        <Container>
                        <Row>
                          <Col className="carousel-right-down">
                            <div class="title-horizontal-center">
                              <h5 class=" text-center">Get the finest thing from here > </h5>
                            </div>
                          </Col>
                        </Row>
                        </Container>

                      </picture>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <br></br>

          <div id="content" class="clear" role="main"  xs="12" sm="6" md="8" lg="8">
            <div data-apperas-component-name="shubham">
              <div class="title-horizontal-center" className="carousel">
                <h3 class="text-center" >Popular right now</h3>
                <br></br>
                <Container>
                  <MultipleItems />
                </Container>
              </div>
            </div>
          </div>

          <br></br>

          <div id="content" class="clear" role="main" >
            <div data-apperas-component-name="shubham">
              <div  class="title-horizontal-center">
                <h3 class="text-center">Shop For Gifts</h3>
                <br></br>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol md="12">
                      <MDBRow>
                        <MDBCol xs="6" md="2">
                        <MDBView hover zoom xs="12" sm="6" md="8" lg="8">
                          <img   className="resimg" src="https://images.bewakoof.com/t320/beard-man-half-sleeve-t-shirt-men-s-printed-t-shirts-215397-1555762460.jpg"></img>
                          <MDBMask overlay="red-slight">
                          </MDBMask>
                          </MDBView>
                          <div >
                            <h10 >Beard Man Half Sleeve T-Shirt</h10>
                            <p>₹499</p>
                          </div>
                        </MDBCol>

                        <Col xs="6" md="2">
                          <img className="resimg" src="https://i.etsystatic.com/15147683/d/il/250ff5/1394944099/il_340x270.1394944099_7inv.jpg?version=0" ></img>
                          <div >
                            <h8 >Pot Stand</h8>
                            <p>₹499</p>
                          </div>
                        </Col>

                        <Col xs="6" md="2">
                          <img className="resimg" src="https://i.etsystatic.com/9244660/d/il/36a2f1/572630602/il_340x270.572630602_5tdh.jpg?version=1"></img>
                          <div >
                            <h8 >Pet House</h8>
                            <p>₹999</p>
                          </div>
                        </Col>

                        <Col xs="6" md="2">
                          <img className="resimg" src="https://i.etsystatic.com/13380470/d/il/10f741/1083395275/il_340x270.1083395275_mi99.jpg?version=0"></img>
                          <div >
                            <h8 >Love Home Frame</h8>
                            <p>₹499</p>
                          </div>
                        </Col>

                        <Col xs="6" md="2">
                          <img className="resimg" src="https://i.etsystatic.com/13590404/d/il/988603/1696416066/il_340x270.1696416066_o4k1.jpg?version=0"></img>
                          <div >
                            <h8 >Colourfull Chalk</h8>
                            <p>₹499</p>
                          </div>
                        </Col>

                        <Col xs="6" md="2">
                          <img className="resimg" src="https://i.etsystatic.com/15147683/d/il/b73cc3/1636649338/il_340x270.1636649338_81jb.jpg?version=0" ></img>
                          <div >
                            <h8 >Spoon Stand</h8>
                            <p>₹499</p>
                          </div>
                        </Col>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </div>
            </div>
          </div>
          <br></br>





          <div id="content" class="clear" role="main">
            <div data-apperas-component-name="shubham">
              <div class="title-horizontal-center">
                <h3 class="text-center">Shop the 'Gram'</h3>
                <p class="text-center">Upload your favorite outfit on Instagram with
                            <br />
                  #ME for a chance to be featured!
                            <div class="align-items-center">
                    <a href="/in-en/c/Terms and conditions?ref=catnav-10855">
                      <span id="catnav-primary-link-10855" class="text-gray-darker">Terms and conditions </span></a>
                  </div>
                </p>
                <br></br>

                <Container>
                  <Row>
                    <Col md="12">
                      <Row>
                        <Col xs="6" md="2">
                          <img className="imgres" src="https://d28m5bx785ox17.cloudfront.net/v1/img/IyN2ncTLcOGAjWrR7_eTlsODTS2vg7GOBNjDT-02NoA=/sc/300x300" ></img>
                        </Col>

                        <Col  xs="6" md="2">
                          <img className="imgres" src="https://www.forever21.com/images/default_330/00294484-02.jpg" ></img>
                        </Col>

                        <Col  xs="6" md="2">
                          <img className="imgres" src="https://www.forever21.com/images/default_330/00346985-01.jpg" ></img>
                        </Col>

                        <Col  xs="6" md="2">
                          <img className="imgres" src="https://www.forever21.com/images/default_330/00346962-01.jpg" ></img>
                        </Col>

                        <Col  xs="6" md="2">
                          <img className="imgres" src="https://www.forever21.com/images/f21/us/en/web/20190403/Shop-Mens.jpg?1" ></img>
                        </Col>

                        <Col  xs="6" md="2">
                          <img className="imgres" src="https://d28m5bx785ox17.cloudfront.net/v1/img/KrQN8jHs3B8-gqDTU2Lz5m-iNQRxhg7zCIwhgQYAkO8=/sc/300x300" ></img>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>

                <br></br>

                <Container>
                  <Row>
                    <Col md="12">
                      <Row>
                        <Col xs="6"  md="2">
                          <img className="imgres" src="https://images.bewakoof.com/t320/hope-pin-half-sleeve-t-shirt-men-s-printed-t-shirts-202447-1543315883.jpg" ></img>
                        </Col>

                        <Col xs="6" md="2">
                          <img className="imgres" src="https://images.bewakoof.com/t320/dab-marshmello-half-sleeve-t-shirt-men-s-printed-t-shirts-200407-1540974773.jpg" ></img>
                        </Col>
                        
                        <Col xs="6" md="2">
                          <img className="imgres" src="https://images.bewakoof.com/t320/retro-stripes-side-panle-boyfriend-t-shirt-women-s-plain-side-panel-boyfriend-t-shirts-212687-1554379751.jpg" ></img>
                        </Col>

                        <Col xs="6" md="2">
                          <img className="imgres" src="https://images.bewakoof.com/t320/meteor-grey-scoop-neck-full-sleeve-t-shirt-women-s-plain-scoop-neck-full-sleeve-t-shirt-211958-1553942998.jpg" ></img>
                        </Col>

                        <Col xs="6" md="2">
                          <img className="imgres" src="https://www.forever21.com/images/default_330/00323690-01.jpg" ></img>
                        </Col>

                        <Col xs="6" md="2">
                          <img className="imgres" src="https://www.forever21.com/images/default_330/00331097-04.jpg" ></img>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
                
                <br></br>
                

                <div className="returnpolicy">
                <div id="content" class="clear" role="main">
                <div data-apperas-component-name="shubham">
                  <div class="title-horizontal-center">
                  <br></br>
                    <h3 class="text-center">---Delivery & Returns---</h3>
                    <br></br>
                    <br></br>
                  <Container>
                    <Row >

                      <Col md="3" className="returnpolicy2" >
                        <div   class="title-horizontal-left"> 
                        <i class="material-icons" > local_shipping </i>
                        <h5   class=" text-left" style={{paddingLeft:"30px",marginTop:"-33px"}}>   Free Shipping </h5></div>
                        <p style={{marginLeft:"30px"}}>Avail free shipping for orders above ₹995.</p>
                      </Col>

                      <Col md="3">
                        <div  class="title-horizontal-left" > 
                        <i  class="material-icons" > help_outline </i>
                          <h5  class=" text-left"  style={{paddingLeft:"30px",marginTop:"-33px" ,padding:"pointer"}}> Support </h5></div>
                        <p style={{marginLeft:"30px"}}> Contact us help@imdb.in</p>
                      </Col>

                      <Col md="3">
                        <div  class="title-horizontal-left" >
                        <i  class="material-icons" > forward_30 </i>
                          <h5  class=" text-left"  style={{paddingLeft:"30px",marginTop:"-33px" ,padding:"pointer"}}>  30 Days Return </h5></div>
                        <p style={{marginLeft:"30px"}}> Hassle-free returns upto 30 days.</p>
                      </Col>

                      <Col md="3">
                        <div  class="title-horizontal-left">
                        <i  class="material-icons" > attach_money </i>
                          <h5   class=" text-left"  style={{paddingLeft:"30px",marginTop:"-33px" ,padding:"pointer"}}>    100% Secure Payment</h5></div>
                        <p style={{marginLeft:"30px"}}>We ensure secure payment with PCI security council.</p>
                      </Col>
                    </Row>
                  </Container>
                  <br></br>
                  <br></br>
                </div>

              </div>
            </div>
          </div>

          </div>
          </div>
          </div>
        </body>
      </div>
    );
  }
}
export default Box;




/*<div className="input-body">
    <label for="email-text" class="screen-reader-only">Enter your email</label>
    <input type="text" class="input" id="email-text" placeholder="Enter your email" name="email_address"></input>
    </div>
    <div className="input-group-button">
    <button type="submit" data-action="email-list-subscribe" class="button button-append button-primary">subscribe</        <button>
 </div>

  <Row>-------etsy
          <Col md="12">
            <Navbar bg="dark" variant="dark" expand="lg">
              <ul>
                <div class="align-items-center">
                  <a href="/in-en/c/jewelry-and-accessories?ref=catnav-10855">
                    <span id="catnav-primary-link-10855" class="text-gray-darker">Jewellery & Accessories </span></a>
                </div>
              </ul>



              <ul>
                <div class="align-items-center">
                  <a href="/in-en/c/jewelry-and-accessories?ref=catnav-10855">
                    <span id="catnav-primary-link-10855" class="text-gray-darker">
                      Clothing & Shoes </span>
                  </a>
                </div>
              </ul>



              <ul>
                <div class="align-items-center">
                  <a href="/in-en/c/jewelry-and-accessories?ref=catnav-10855">
                    <span id="catnav-primary-link-10855" class="text-gray-darker">
                      Home & Living </span>
                  </a>
                </div>
              </ul>

              <ul>
                <div class="align-items-center">
                  <a href="/in-en/c/jewelry-and-accessories?ref=catnav-10855">
                    <span id="catnav-primary-link-10855" class="text-gray-darker">
                      Wedding & Party </span>
                  </a>
                </div>
              </ul>

              <ul>
                <div class="align-items-center">
                  <a href="/in-en/c/jewelry-and-accessories?ref=catnav-10855">
                    <span id="catnav-primary-link-10855" class="text-gray-darker">
                      Toys & Entertainments </span>
                  </a>
                </div>
              </ul>

              <ul>
                <div class="align-items-center">
                  <a href="/in-en/c/jewelry-and-accessories?ref=catnav-10855">
                    <span id="catnav-primary-link-10855" class="text-gray-darker">
                      Art & Collectibles
             </span>
                  </a>
                </div>
              </ul>

              <ul>
                <div class="align-items-center">
                  <a href="/in-en/c/jewelry-and-accessories?ref=catnav-10855">
                    <span id="catnav-primary-link-10855" class="text-gray-darker">
                      Art & Collectibles
           </span>
                  </a>
                </div>
              </ul>

            </Navbar>
          </Col>
        </Row>
        card------
         <Card style={{ width: '12rem' }}>
                                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAC5VD8xOxTwwIYO8j8kw25F999DYZ49clEFPDY8vwC34ueJJd" height="218"/>
                                        <Card.Body>
                                            <Card.Text>
                                                Started from 2020.
                                                Now we are here.
                                             </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <br></br>

-----------------------------------------------------------email--------------------------------------------------
                                    <label for="email-text" class="screen-reader-only"> <div className="input-group-button">
            <button type="submit" data-action="email-list-subscribe" class="button button-append button-primary">submit</button>
           </div></label>
            <input type="text" class="input" id="email-text" placeholder="enter your email" name="email_address"></input>
            </div>

  --------------------------------footer----------------------------------------

                                     <Card
      style={{ width: "100%", backgroundColor: "#4d4d4d", color:"white" }} >
        <Card.Body>
          <Card.Title></Card.Title>
          <Container>
            <Row style={{ width: "100%", backgroundColor: "#4d4d4d", color: "#13adb3" }}>
              <Col>CUSTOMER SERVICE</Col>
              <Col>COMPANY</Col>
              <Col>CONNECT WITH US</Col>
              <Col>KEEP UP TO DATE</Col>
            </Row>

            <Row>
              <Col>Contact Us</Col>
              <Col>About Us</Col>
              <Col> <Button
              variant="link"
              style={{ textDecoration: "none", color: "#FFFFFF" }} >
              <i class="material-icons">perm_identity</i>

            </Button></Col>
              <Col></Col>
            </Row>

            <Row>
              <Col>Track Order</Col>
              <Col>We're Hiring</Col>
              <Col>Instagram:284K Followers</Col>
              <Col></Col>
            </Row>

            <Row>
            <Col>Return Order</Col>
            <Col>Term & Conditions</Col>
            <Col></Col>
            <Col></Col>
          </Row>

          <Row>
          <Col>Cancel Order</Col>
          <Col>Privacy Policy</Col>
          <Col></Col>
          <Col></Col>
        </Row>
          </Container>
          <br></br>

          <Card.Text>
          <Button variant="outline-info">See More</Button>
          </Card.Text>

        </Card.Body>
      </Card>
     ------------------------------------------fooooottteererer table------------------------------------------------------------------

    <table class="table table-borderless table-dark" responsive="sm" >
        <thead>
          <tr style={{ textDecoration: "none", color: "yellow" }}>
            <th scope="col">CUSTOMER SERVICE</th>
            <th scope="col">COMPANY</th>
            <th scope="col">CONNECT WITH US</th>
            <th scope="col">KEEP UP TO DATE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Connect Us</td>
            <td>About us</td>
            <td>  <i class="material-icons">facebook</i>Facebook</td>

          </tr>
          <tr>
            <td>Track Order</td>
            <td>We're hiring</td>
            <td> <i class="material-icons">party_mode</i>Instagram</td>
            <td>
              <div className="input-body">
                <Form>
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                      Email
            </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="email" placeholder="Email" />
                      <Button
                        style={{
                          position: "absolute",
                          borderRadius: "70px",
                          marginLeft: "194x",
                          bottom: "3.95px",
                          height:"40px"
                        }}
                        variant="info" >
                        <i style={{ verticalAlign: "right" }}
                          class="material-icons" >
                          search
                    </i>
                      </Button>
                    </Col>
                  </Form.Group>
                </Form>
              </div>
            </td>
          </tr>

          <tr>
            <td>Return Order</td>
            <td>Terms and Conditions</td>
            <td> <i class="material-icons">title</i>Twitter</td>
          </tr>

          <tr>
            <td>Cancel Order</td>
            <td>Privacy Policy</td>
            <td> <i class="material-icons">chat</i>Blog</td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td> <i class="material-icons">restore</i>15 Days return Policy</td>
            <td style={{ textDecoration: "none", color: "yellow" }}>DOWNLOAD THE APP

            <div class="downloadAppIcon">
            <br></br>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.bewakoof.bewakoof&amp;hl=en">
            <img src="https://images.bewakoof.com/web/app_android_v1.png" title="android app" alt="android app" width="100px" class="hidden-xs"/>
            <img src="https://images.bewakoof.com/web/android-2x.png" title="android app" alt="android app" width="24px" class="visible-xs"/>
            </a>

            <a target="_blank" href="https://itunes.apple.com/in/app/bewakoof/id1100190514?mt=8">
            <img src="https://images.bewakoof.com/web/app_ios_v1.png" title="ios app" alt="ios app" width="100px" class="hidden-xs"/>
            <img src="https://images.bewakoof.com/web/apple-2x.png" title="ios app" alt="ios app" width="24px" class="visible-xs"/>
            </a>

            </div>
            </td>
            <td style={{ textDecoration: "none", color: "yellow" }}>100% SECURE PAYMENT
            <div class="payment">
            <br></br>
            <img class="paymentImg" src="https://images.bewakoof.com/web/secure-payments-image.png" title="secure payments" alt="secure payments"></img>
            </div>
            </td>
          </tr>

          <tr>
            <td> <i class="material-icons">local_shipping</i>Cash on delivery*</td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td> <i class="material-icons">account_balance_wallet</i>Pay online & get free shipping.</td>
            <td></td>
            <td></td>
          </tr>
          <br></br>
        </tbody>
      </table>

    </div>


      */

