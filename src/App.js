import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import ContactPage from './components/contact/ContactPage';
import ProductPage from './components/Product/ProductPage'
import Signup from './components/SignUp/sign-up'
import LoginForm from './components/LogIn/login-form'
import SingleProduct from "./components/Product/SingleProduct";
import Cart from './components/cart/Cart'
import Info from './components/cart/Info';
import Order from './components/order.js/Order';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: (sessionStorage.getItem('id')) ? true : false,
      username: null
    }
  }

  updateUser = (data) => {
    this.setState({
      loggedIn: data,
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header loggedIn={this.state.loggedIn} updateUser={this.updateUser} />
          <div className="space"></div>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/product" component={ProductPage} exact />
            <Route path="/about-us" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/log-in" component={() => <LoginForm updateUser={this.updateUser} />} />
            <Route path="/sign-Up" component={Signup} />
            <Route path="/product/:p_Id" component={SingleProduct} />
            <Route path="/:id/cart" component={Cart} exact/>
            <Route path="/:id/cart/info" component={Info} />
            <Route path="/:id/order" component={Order} />
          </Switch>
          <Footer loggedIn={this.state.loggedIn} updateUser={this.updateUser} />
        </div>
      </BrowserRouter>





    );
  }
}

export default App;