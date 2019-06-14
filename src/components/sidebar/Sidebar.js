import React from 'react';
import "./style.scss"
import { Card, Container, Row, Col } from "react-bootstrap";
import { IoIosArrowDown, IoIosShirt } from "react-icons/io";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  OverlayTrigger,
  Dropdown
} from "react-bootstrap";




class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      showList: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleScroll = e => {
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // do something at end of scroll
    }
  } 

  handleClick(e) {
    console.log(e.target.id)
    console.log(e.currentTarget.id)
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn

    }));
 
    this.setState({
      showList: (e.currentTarget.id)} )
    
  }   


  render() {
    const data = [
      { id: 1, list: <b style={{fontStyle:"Times New Roman"}}>Category</b> , subtype: ["T-Shirt", "Sweatshirt", "Vest", "Pants", "Joggers", "Shirt", "Shorts", "Jacket"] },
      { id: 2, list: <b>Sizes</b> , subtype: ["S", "M", "L", "XL", "XXL", "XXXL"] },
      { id: 3, list: <b>Color</b> , subtype: [] },
      { id: 4, list: <b>Design</b> , subtype: ["chest Printed", "Plain", "Checked"] },
      { id: 5, list: <b>Fit</b> , subtype: ["Regular", "Slim"] },
      { id: 6, list: <b>Sleeve</b> , subtype: ["Full Sleeve", "Half Sleeve", "Sleeveless"] },
      { id: 7, list: <b>Neck</b> , subtype: ["Round Neck", "Two Piece Collar", "Mandarin Collar", "Bomber"] },
      { id: 8, list: <b>Sort By</b> , subtype: ["popular", "New", "Price:High to Low", "Price:Low to High"] }
    ]

    return (
      <div>
        <div>
          <container>
            <Row>

              <Col sm={3} className="sidebar" style={{backgroundColor:"snow"}} onScroll={this.handleScroll}>
                <br></br>
                <h1>Mens Clothing</h1>
                <br></br>
                
                <h6 style={{ color: "gray", paddingRight: "195px" }}>Filter</h6>

                <ul class="dot" style={{ listStyle: "none" }}>


                  {
                    data.map((item, k) => {

                      return (
                        <div>
                          <li >{item.list}
                            <div class="arrow">
                              <button className="button" varient="Link" id={item.id} onClick={this.handleClick} >
                                {this.state.isToggleOn && this.state.showList == item.id ? (<i class="material-icons category" > expand_less </i>) : (<i class="material-icons category" > expand_more </i>)}
                              </button>
                            </div>
                          </li>

                          <ul className="sublist" style={{  }}>
                            {console.log(this.state.showList)}
                            {
                              item.subtype.map(listitem => {
                                if (this.state.showList == item.id && this.state.isToggleOn)
                                 {
                                  return(
                                    <li>{listitem}</li>
                                  )
                                  }
                              })
                            }
                          </ul>
                          <div style={{marginTop:"10px"}}></div>
                          <div className="block-example border-bottom border-dark" style={{marginBottom:"10px"}}></div>
                          
                        </div>
                      );
                    })
                  }
                </ul>
              </Col>






              <Col sm={9} className="image">
                <br></br>

                <Row md="12">
                  <Col md="4">
                    <img src="https://images.bewakoof.com/t540/blue-haze-half-sleeve-t-shirt-men-s-plain-t-shirts-217604-1558958367.jpg" width="253" height="315"       ></img>
                    <div >
                      <h10 >Beard Man Half Sleeve T-Shirt</h10>
                      <p>₹499</p>
                    </div>
                  </Col>

                  <Col md="4">
                    <img src="https://images.bewakoof.com/t320/island-blue-half-sleeve-t-shirt-men-s-plain-t-shirts-209191-1548941201.jpg" width="253" height="315"></img>
                    <div >
                      <h10 >Beard Man Half Sleeve T-Shirt</h10>
                      <p>₹499</p>
                    </div>
                  </Col>

                  <Col md="4">
                    <img src="https://i.etsystatic.com/16722944/r/il/154831/1634291737/il_794xN.1634291737_qy35.jpg" width="253" height="315"></img>
                    <div >
                      <h10 >Beard Man Half Sleeve T-Shirt</h10>
                      <p>₹499</p>
                    </div>
                  </Col>

                  <Col md="4">
                    <img src="https://i.etsystatic.com/20084638/r/il/701805/1865615078/il_794xN.1865615078_tt0x.jpg" width="253" height="315"></img>
                    <div >
                      <h10 >Beard Man Half Sleeve T-Shirt</h10>
                      <p>₹499</p>
                    </div>
                  </Col>

                  <Col md="4">
                    <img src="https://www.forever21.com/images/default_330/00354832-01.jpg" width="253" height="315"></img>
                    <div >
                      <h10 >Beard Man Half Sleeve T-Shirt</h10>
                      <p>₹499</p>
                    </div>
                  </Col>

                  <Col md="4">
                    <img src="https://www.forever21.com/images/default_330/00344311-05.jpg" width="253" height="315"></img>
                    <div >
                      <h10 >Beard Man Half Sleeve T-Shirt</h10>
                      <p>₹499</p>
                    </div>
                  </Col>

                  <Col md="4">
                    <img src="https://www.forever21.com/images/default_330/00230718-02.jpg" width="253" height="315"></img>
                    <div >
                      <h10 >Beard Man Half Sleeve T-Shirt</h10>
                      <p>₹499</p>
                    </div>
                  </Col>

                  <Col md="4">
                    <img src="https://www.forever21.com/images/2_side_330/00343284-02.jpg" width="253" height="315"></img>
                    <div >
                      <h10 >Beard Man Half Sleeve T-Shirt</h10>
                      <p>₹499</p>
                    </div>
                  </Col>

                  <Col md="4">
                    <img src="https://images.bewakoof.com/t320/blue-haze-full-sleeve-t-shirt-men-s-plain-full-sleeve-t-shirts-217602-1558958312.jpg" width="253" height="315"></img>
                    <div >
                      <h10 >Beard Man Half Sleeve T-Shirt</h10>
                      <p>₹499</p>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col sm={1}></Col>
            </Row>

          </container>
        </div>
      </div>

    )
  }
}
export default Sidebar;