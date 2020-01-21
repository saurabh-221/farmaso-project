import React, { Component } from 'react';
import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
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
                    Make purchases with our app{" "}
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae iste.
                  </h6>
                  <MDBBtn color="white">Download</MDBBtn>
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

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBCard className="my-5 px-5 pb-5 text-center">
          <MDBCardBody>
            <h2 className="h1-responsive font-weight-bold my-5">
              Our amazing team
          </h2>
            <p className="grey-text w-responsive mx-auto mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
            <MDBRow>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                {/* <MDBAvatar
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg(11 kB)
https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg
"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              /> */}
                <h5 className="font-weight-bold mt-4 mb-3">Saurabh Jain</h5>
                <p className="text-uppercase blue-text">Software Developer</p>
                <p className="grey-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  ipsa accusantium doloremque rem laudantium totam aperiam.
              </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="instagram" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                {/* <MDBAvatar
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg(23 kB)
https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg
"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              /> */}
                <h5 className="font-weight-bold mt-4 mb-3">Vishnu Vardhan</h5>
                <p className="text-uppercase blue-text">Software Developer</p>
                <p className="grey-text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim est fugiat nulla id eu laborum.
              </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="instagram" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="dribbble" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default HomePage;