import React, { Component } from 'react';
import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import { Link } from 'react-router-dom'

import './HomePage.css';

class HomePage extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div id="apppage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Make money using Farmaso
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Farmaso is a peer to peer online rental system for lending and renting farming equipments.
                    Here any farmer or local people can rent their equipments and make money. Any farmer in need of equipments can rent them on hourly basis.
                  </h6>
                  <Link to="/product">
                    <MDBBtn color="white">Add Product</MDBBtn>
                  </Link>
                  <MDBBtn outline color="white">
                    Learn More
                  </MDBBtn>
                </div>
                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <img
                    src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
                    alt=""
                    className="img-fluid"
                  />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Some of our Products
        </h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">
            A variety of products are being rented and lented over our web-app. Some of them are been mentioned below.
        </p>
          <div className="product-container">
            <Link to="/product">
              <div className="product-card">
                </div>
                <h2 className="equipment">Tractors</h2>
              
            </Link>
            <div className="extra-space"></div>
            <Link to="/product">
              <div className="product-card2">
                </div>
                <h2 className="equipment">Harvester</h2>
              
            </Link>
            <div className="extra-space"></div>
            <Link to="/product">

              <div className="product-card3">
                </div>
                <h2 className="equipment">Sprayer</h2>
              
            </Link>
            <div className="extra-space"></div>
            <Link to="/product">
              <div className="product-card4">
                </div>
                <h2 className="equipment">Tillage</h2>
              
            </Link>
            <div className="extra-space"></div>
            <Link to="/product">
              <div className="product-card5">
                </div>
                <h2 className="equipment">Sprinklers</h2>
              
            </Link>
            <div className="extra-space"></div>
            <Link to="/product">
              <div className="product-card6">
                </div>
                <h2 className="equipment">Cutters</h2>
              
            </Link>
          </div>
          <MDBCard className="my-5 px-5 pb-5 text-center team-height">
            <MDBCardBody>
              <h2 className="h1-responsive font-weight-bold my-5">
                Our amazing team
          </h2>
              <p className="grey-text w-responsive mx-auto mb-5">
                We are working at Mountblue Technologies as trainees. Farmaso is a major project assigned to us. Farmaso is mainly a peer to peer farming equipment rental app
          </p>
              <MDBRow>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <div className="product-card8">
                  <img src="../images/sss.jpg"></img>
                  </div>
                  <h5 className="font-weight-bold mt-4 mb-3">Saurabh Jain</h5>
                  <p className="text-uppercase blue-text">Software Developer</p>
                  <p className="grey-text">
                   B.Tech(CSE)
              </p>
                  {/* <ul className="list-unstyled mb-0">
                    <a href="#!" className="p-2 fa-lg">
                      <MDBIcon fab icon="facebook-f" className="blue-text" />
                    </a>
                    <a href="#!" className="p-2 fa-lg">
                      <MDBIcon fab icon="instagram" className="blue-text" />
                    </a>
                  </ul> */}
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <div className="product-card9">
                  </div>
                  <h5 className="font-weight-bold mt-4 mb-3">Vishnu Vardhan</h5>
                  <p className="text-uppercase blue-text">Software Developer</p>
                  <p className="grey-text">
                    B.E(ECE)
              </p>
                  {/* <ul className="list-unstyled mb-0">
                    <a href="#!" className="p-2 fa-lg">
                      <MDBIcon fab icon="facebook-f" className="blue-text" />
                    </a>
                    <a href="#!" className="p-2 fa-lg">
                      <MDBIcon fab icon="instagram" className="blue-text" />
                    </a>
                    <a href="#!" className="p-2 fa-lg">
                      <MDBIcon fab icon="dribbble" className="blue-text" />
                    </a>
                  </ul> */}
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </section>
      </div>
    );
  }
}

export default HomePage;