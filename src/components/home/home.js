import React, { Component } from 'react';
import { Grid, Row, Col, Image, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

import AboutNature from '../about/aboutNature.js'

import "./home.css"
import nature from '../../assets/nature.jpeg'
import flower from '../../assets/flower.jpeg'
import climate from '../../assets/climate.jpeg'
import categoryData from '../../categorylist.json'
const target = "target";
export default class Home extends Component {
    constructor(props) {
        super(props);
        console.log('home props', props);
        this.state = {
            categoryList: categoryData.result
        };
    }


    natureClick = () => {
        let data = {
            showHeader: false
        }
        this.props.history.push({ pathname: '/aboutNature', state: data });;
    }

    scope = (name) => {


        var greeting = "Hello"
        console.log(greeting + " " + name);
        if (true) {

        }
        console.log(target);
        for (var i = 0; i < 10; i++) {
            console.log(i);
        }
        console.log(i);
    }


    flowerClick = () => {
        //this.scope("Nani");
        //console.log(greeting);

    }
    climateClick = () => {

    }
    componentWillMount() {

    }
    componentDidMount() {
        console.log('categorydata --->', this.state.categoryList);
    }
    render() {
        const child = { width: `300em`, height: `100%` }
        return ( 

        	<div className = "" >
        		<AboutNature />
            <Grid >

            <
            Row >
            <
            Col xs = { 12 }
            sm = { 4 }
            className = "col-wrapper" >
            <
            Image src = { nature }
            circle className = "top_images" / >
            <
            h1 > Nature < /h1> <
            p > sdjkfgdsbgjdfksbgvdfbghdfjkbgvhdfjbv fdjkgvhbdfjksbghvjdfhsgbkdfghbkdfbvghdf dfb dfhjbgvdfbghdfj < /p>

            <
            Button bsStyle = "primary"
            onClick = { this.natureClick } > About Nature < /Button>

            <
            /Col> <
            Col xs = { 12 }
            sm = { 4 }
            className = "col-wrapper" >
            <
            Image src = { flower }
            circle className = "top_images" / >
            <
            h1 > Flowers < /h1> <
            p > sdjkfgdsbgjdfksbgvdfbghdfjkbgvhdfjbv fdjkgvhbdfjksbghvjdfhsgbkdfghbkdfbvghdf dfb dfhjbgvdfbghdfj < /p> <
            Link to = "/aboutFlowers" >
            <
            Button bsStyle = "primary" > About Flowers < /Button> <
            /Link> <
            /Col> <
            Col xs = { 12 }
            sm = { 4 }
            className = "col-wrapper" >
            <
            Image src = { climate }
            circle className = "top_images" / >
            <
            h1 > Climate < /h1> <
            p > sdjkfgdsbgjdfksbgvdfbghdfjkbgvhdfjbv fdjkgvhbdfjksbghvjdfhsgbkdfghbkdfbvghdf dfb dfhjbgvdfbghdfj < /p> <
            Link to = "/aboutClimate" >
            <
            Button bsStyle = "primary" > About Climate < /Button> <
            /Link> <
            /Col> <
            /Row> <
            /Grid> <
            /div>
        );
    }
}