import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import createBrowserHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'

import About from './components/about/about';
import Home from './components/home/home';
import Header1 from './components/header1/header1';
import AboutFlowers from './components/about/aboutFlowers.js'
import AboutNature from './components/about/aboutNature.js'
import AboutClimate from './components/about/aboutClimate.js'
import SignIn from './components/signin/signin'
import SignUp from './components/signup/signup'
import Welcome from './components/welcome/welcome'
import Dashboard from './components/dashboard/dashboard'
import Header2 from './components/header2/header2'
import Feeds from './components/feeds/feeds'
import Notifications from './components/notifications/notifications'
import PostAds from './components/postAds/postAds'
import MyProfile from './components/profile/myProfile'

const history = createBrowserHistory()
class App extends Component {

    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    render() {
        console.log('props in appjs');
        return ( <Router >
            <div >
            <Header2 / >
            <Header1 / >

            <Route path = "/"
            exact static component = { Home }
            history = { history }/> 
            <Route path = "/welcome"
            component = { Welcome }
            history = { history }/> 
            <Route path = "/signin"
            component = { SignIn }
            history = { history }/> 
            <Route path = "/signup"
            component = { SignUp }
            history = { history }/> 
            <Route path = "/dashboard"
            component = { Dashboard }
            history = { history }/> 
            <Route path = "/about"
            component = { About }
            history = { history }/> 
            <Route path = "/home"
            component = { Home }
            history = { history }/> 
            <Route path = "/myProfile"
            component = { MyProfile }
            history = { history }/> 
            <Route path = "/feeds"
            component = { Feeds }
            history = { history }/> 
            <Route path = "/notifications"
            component = { Notifications }
            history = { history }/>

            <Route path = "/aboutFlowers"
            component = { AboutFlowers }
            history = { history }/> 
            <Route path = "/aboutNature"
            component = { AboutNature }
            history = { history }/> 
            <Route path = "/aboutClimate"
            component = { AboutClimate }
            history = { history }/>


            </div> 
            </Router >
        );
    }
}

export default App;