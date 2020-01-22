import React from "react";
import { Link } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import 'mdbreact/dist/css/mdb.css'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h2 className="title">Farmaso</h2>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <Link to="/">Home</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/product">Products</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/sign-Up">SignUp</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/log-in">Login</Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:  Farmaso.com 
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;