import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBFormInline } from "mdbreact";

function Header() {
    return (
        <header className="mb-5">
            <MDBNavbar
                color="primary-color"
                dark
                expand="md"
                fixed="top"
                scrolling
            >
                <MDBNavbarBrand>
                    <strong className="white-text">Farmaso</strong>
                </MDBNavbarBrand>
                <MDBNavbarNav left>
                    <MDBNavItem active>
                        <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/product">Products</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/about-us">About Us</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/contact">Contact Us</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/sign-Up">SignUp</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/log-in">LogIn</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
                {/* <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBFormInline waves>
                            <div className="md-form my-0">
                                <input
                                    className="form-control mr-sm-2"
                                    type="text"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </div>
                        </MDBFormInline>
                    </MDBNavItem>
                </MDBNavbarNav> */}
            </MDBNavbar>
        </header>
    );
}

export default Header;