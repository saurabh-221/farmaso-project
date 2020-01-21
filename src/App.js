import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/Home/HomePage';
// import ProductPage from './components/Product/ProductPage';
import AboutPage from './components/About/AboutPage';
import ContactPage from './components/contact/ContactPage';
import ProductPage from './components/Product/ProductPage'
import SignUpPage from './components/SignUp/SignUpPage';
import LogInPage from './components/LogIn/LogInPage';

import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'
import Home from './components/home'

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//       <Header/>
//       <div className="space"></div>
//       <Switch>
//         <Route path="/" component={HomePage} exact/>
//         <Route path="/product" component={ProductPage}/>
//         <Route path="/about-us" component={AboutPage}/>
//         <Route path="/contact" component={ContactPage}/>
//         <Route path="/sign-Up" component={SignUpPage}/>
//         <Route path="/log-in" component={LogInPage}/>
//       </Switch>
//       <Footer/>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
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
            {/* <Route path="/sign-Up" component={SignUpPage} /> */}
            {/* <Route path="/log-in" component={LogInPage} /> */}


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