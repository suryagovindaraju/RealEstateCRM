import React, { Component } from 'react';
import { Nav, NavItem, NavDropdown, MenuItem, Navbar } from "react-bootstrap"
import { Link } from 'react-router-dom'

import './header1.css'
import logo from '../../assets/logo.png';

export default class Header extends Component {

    render() {
        return ( <
            Navbar collapseOnSelect className = "navContainer" >
            <
            Navbar.Header >
            <
            Navbar.Brand >
            <
            div className = "logo" >
            <
            img src = { logo }
            alt = "logo" / >
            <
            /div>  < /
            Navbar.Brand > <
            Navbar.Toggle / >

            <
            /Navbar.Header>

            <
            Navbar.Collapse >
            <
            Nav pullRight >
            <
            NavItem eventKey = { 1 }
            componentClass = { Link }
            to = "/home"
            href = "/home"
            history = { this.props.history } >
            Home <
            /NavItem> <
            NavItem eventKey = { 2 }
            componentClass = { Link }
            to = "/about"
            href = "/about"
            history = { this.props.history } >
            About <
            /NavItem> <
            NavDropdown eventKey = { 3 }
            title = "Properties"
            id = "basic-nav-dropdown" >
            <
            MenuItem eventKey = { 3.1 }
            componentClass = { Link }
            to = "/welcome"
            href = "/welcome"
            history = { this.props.history } > All < /MenuItem> <
            MenuItem eventKey = { 3.2 }
            componentClass = { Link }
            to = "/signin"
            href = "/signin"
            history = { this.props.history } > Plot < /MenuItem> <
            MenuItem eventKey = { 3.3 }
            componentClass = { Link }
            to = "/signup"
            href = "/signup"
            history = { this.props.history } > Flat < /MenuItem> <
            MenuItem eventKey = { 3.3 }
            componentClass = { Link }
            to = "/dashboard"
            href = "/dashboard"
            history = { this.props.history } > Individul < /MenuItem> <
            MenuItem divider / >
            <
            MenuItem eventKey = { 3.3 } > Separated link < /MenuItem> < /
            NavDropdown > <
            NavItem eventKey = { 1 }
            componentClass = { Link }
            to = "/home"
            href = "/home"
            history = { this.props.history } >
            Blog <
            /NavItem> <
            NavItem eventKey = { 2 }
            componentClass = { Link }
            to = "/about"
            href = "/about"
            history = { this.props.history } >
            Pages <
            /NavItem> <
            NavItem eventKey = { 2 }
            componentClass = { Link }
            to = "/about"
            href = "/about"
            history = { this.props.history } >
            Contact <
            /NavItem>

            <
            /Nav> < /
            Navbar.Collapse > <
            /Navbar>
        );
    }
}