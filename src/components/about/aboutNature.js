import  React, {Component} from 'react'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import './aboutNature.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { Slide } from 'react-slideshow-image';

import nature1 from '../../assets/nature1.jpeg'
import nature3 from '../../assets/nature3.jpeg'

import background1 from '../../assets/background1.jpg'
import background2 from '../../assets/background2.jpg'
import background3 from '../../assets/background3.jpg'
import background4 from '../../assets/background4.jpg'
import background5 from '../../assets/background5.jpg'

var slideIndex = 1;
export default class AboutNature extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	  console.log('props in AboutNature', props);
	}
	
	plusDivs = (n) =>{
	  this.showDivs(slideIndex += n);
	}

	showDivs = (n) => {
	  var i;
	  var x = document.getElementsByClassName("mySlides");
	  if (n > x.length) {slideIndex = 1} 
	  if (n < 1) {slideIndex = x.length} ;
	  for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none"; 
	  }
	  x[slideIndex-1].style.display = "block"; 
	}

	//showDivs(slideIndex);

	render(){
		return(
			<div>
				<Carousel interval={2000} 
						verticalSwipe={"standard"} 
						transitionTime={350}
						autoPlay={true}
						infiniteLoop={true}
						showArrows={false}
						showIndicators={false}
						showThumbs={false}
						showStatus={false}>
	                <div>
	                    <img src={background1} />
	                    <p className="legend">GET YOUR 
	                    <span className="dreams"> DREAM HOME </span> 
	                    TODAY</p>
	                </div>
	                <div>
	                    <img src={background2} />
	                    <p className="legend">HOUSE 
	                    <span className="dreams">INTERIOR</span> 
	                     DESIGN IDEAS</p>
	                </div>
	                <div>
	                    <img src={background3} />
	                    <p className="legend">HOUSE 
	                    	<span className="dreams">INTERIOR</span> 
	                    	DESIGN IDEAS</p>
	                </div>
	                <div>
	                    <img src={background4} />
	                    <p className="legend">AWESOME DECERATE BATHROOM </p>
	                </div>
	                <div>
	                    <img src={background5} />
	                    <p className="legend">WE KNOW YOUR 
	                    <span className="dreams">DREAMS</span>
	                    </p>
	                </div>
	            </Carousel>
				
				<Grid>
					<Row>
						<Col xs={12} sm={6} >
							<Image src={nature3} rounded  />
						</Col>
						<Col xs={12} sm={6} >
							<p>bfgdhjbgjrdshbgdfn vfdhb dfjbndfbndfb dffnbb fdf vfnf vj hbgbrv hrbfgsdjbhv su. ufb adeubedhvb u</p>
						</Col>
						
					</Row>
					<br/>
					<Row>
						<Col xs={12} sm={8}>
							<p>nbv fcnb dfsb dfsbnfddjsb erfg erjh egnerfrgberi nv fbarsbv ke</p>
						</Col>
						<Col xs={12} sm={4} >
							<Image src={nature1} rounded className="fr" />
						</Col>
						
					</Row>
					<br/>
					<Row>
						<Col xs={12} sm={8}>
							<p>nbv fcnb dfsb dfsbnfddjsb erfg erjh egnerfrgberi nv fbarsbv ke</p>
						</Col>
						<Col xs={12} sm={4} >
							<Image src={nature3} rounded className="fr" />
						</Col>
					</Row>
				</Grid>
			</div>
			
			
		);
	}
}