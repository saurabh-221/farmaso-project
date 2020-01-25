import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import 'mdbreact/dist/css/mdb.css'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

class Footer extends Component {

  logout = () => {
    const user = {
      User_Id: sessionStorage.getItem('id'),
    }
    fetch('http://localhost:8080/logout', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    }).then(res => res.json()).then(data => {
      console.log(data);
      this.props.updateUser(false);
      sessionStorage.clear();
      alert('Logged Out');
    }).catch(error => {
      console.log(error);
    })
  }
  render() {
    let button = null;
    if (!this.props.loggedIn) {
      button = (<>
        <li className="list-unstyled">
          <Link to="/sign-Up">SignUp</Link>
        </li>
        <li className="list-unstyled">
          <Link to="/log-in">Login</Link>
        </li>
      </>)
    } else {
      button = (
        <li className="list-unstyled">
          <Link to="/" onClick={this.logout}>Logout</Link>
        </li>
      )
    }
    return (
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6" className="foot-left">
              <h2 className="title">Farmaso</h2>
              <p>
                Make or Save money by Renting farm equipments
            </p>
            </MDBCol>
            <MDBCol md="6" className="foot-side">
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
                {button}
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
}

export default Footer;