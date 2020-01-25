import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { Link } from 'react-router-dom'

class Header extends Component {

    logOut = () => {
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
        let buttons = null;
        if (!this.props.loggedIn) {
            buttons = (<MDBNavbarNav right>
                <MDBNavItem>
                    <MDBNavLink to="/sign-Up">SignUp</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="/log-in">LogIn</MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>);
        } else {
            const id = sessionStorage.getItem('id');
            buttons = (<MDBNavbarNav right>
                <MDBNavItem>
                    <MDBNavLink to={`/${id}/cart`}>Cart</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to={`/${id}/order`}>Order</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="/" onClick={this.logOut}>Log Out</MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>);
        }
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
                        <Link to='/' >
                            <strong className="white-text">Farmaso</strong>
                        </Link>
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
                        {buttons}
                    </MDBNavbarNav>
                </MDBNavbar>
            </header>
        );
    }
}

export default Header;