import React, { Component } from 'react';
import axios from 'axios'
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

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }
  }

  componentDidMount() {
    // this.getUser()
  }

  updateUser = userObject => {
    this.setState(userObject)
  }

  getUser = () => {
    axios.get('/user/').then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="space"></div>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/product" component={ProductPage} />
            <Route path="/about-us" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/log-in" render={() => <LoginForm updateUser={this.updateUser} />} />
            <Route path="/sign-Up" render={() => <Signup />} />

          </Switch>
          <Footer />
        </div>
      </BrowserRouter>





    );
  }
}

export default App;