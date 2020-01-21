import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h3>Farmaso</h3>
            <ul>
                <Link to="/home">
                    <li>Home</li>
                </Link>
                <Link to="/product">
                    <li>Products</li>
                </Link>
                <Link to="/about-us">
                    <li>About</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
                <Link to="/sign-Up">
                    <li>SignUp</li>
                </Link>
                <Link to="/log-in">
                    <li>LogIn</li>
                </Link>
            </ul>
        </header>
    )
}
