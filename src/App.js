import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/Home/HomePage';
import ProductPage from './components/Product/ProductPage';
import AboutPage from './components/About/AboutPage';
import ContactPage from './components/contact/ContactPage';
import SignUpPage from './components/SignUp/SignUpPage';
import LogInPage from './components/LogIn/LogInPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
      <div className="space"></div>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/product" component={ProductPage}/>
        <Route path="/about-us" component={AboutPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/sign-Up" component={SignUpPage}/>
        <Route path="/log-in" component={LogInPage}/>
      </Switch>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
