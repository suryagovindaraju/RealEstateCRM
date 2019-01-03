import React, {Component} from 'react'
import {Grid, Row, Col, Button, Image} from 'react-bootstrap'

import categoryData from '../../categorylist.json'
import menu_button from '../../assets/menu-icon3x.png'
import location_icon from '../../assets/map_pin3x.png'
import search_icon from '../../assets/search_red.png'
import cat_icon from '../../assets/cat_icon.png'
import cat_hover from '../../assets/cat_hover.png'
import './dashboard.css'

class Dashboard extends Component {
	constructor(props, context) {
     	super(props, context);
     	
     	this.state = {
     		text1:"",
        categoryList:categoryData.result,
        subcategoryList:categoryData.result[0].subcategory,
        searchString:''
     	}
  	}
  	handleSignUp = () => {
  		this.props.history.push('/welcome');
  	}
  	goBack = () => {
  		this.props.history.goBack();
  	}
  	handleText1 = (data) => {
  		console.log(' data 1', data.value);
  		this.setState({text1:data.value});
  	}
	render() {
		return(
      <div className="fullheight">
          <div style={{paddingTop:'60px'}}>
            <Grid>
              <Row>
                <Col xs={2} sm={1}  style ={{textAlign:'left', paddingTop:'8px',}}>
                  <Button bsStyle="link" className="background_transparent">
                      <Image src={menu_button} alt="menu" className="menu_icon"></Image>
                  </Button>
                </Col>
                <Col xs={6} sm={9}>
                  <p className="herder-style">Dashboard</p>
                  <p className="location">Hyderabad</p>
                </Col>
                <Col xs={4} sm={2} style ={{textAlign:'right', paddingTop:'15px',}}>
                  
                    <Image src={location_icon} alt="location" className="loc_icon"></Image>
                  
                    <Image src={search_icon} alt="search" className="search_icon"></Image>
                    
                </Col>
              </Row>
            </Grid>
          </div>
          <div className="cat_bg">
              <div className="search-div">
                <input type="text" value={this.state.searchString} className="search-input"></input>
              </div>
              <div id="container">
                <div id="container2">
                  {this.state.categoryList.map((data) => (
                       <div class="box"><div>
                        <a href="#" >
                          <Image src={cat_icon} alt="cat" className="cat_icon"></Image>
                          <p key={data.cat_id} >{data.category}</p>
                      </a>
                       </div></div>
                  ))
                  }                 
                </div>
              </div>
          </div>
          <div id="subcontainer">
            <div id="subcontainer2">
              {this.state.subcategoryList.map((data) => (
                   <div class="box">
                     <Button  bsStyle="link" className="btn">
                      
                      <p key={data.cat_id} >{data.category}</p>
                   </Button >
                   </div>
              ))
              }                 
            </div>
          </div>

          <div className="subcategory">
          </div>
          <div className="dashboard">
            {this.state.subcategoryList.map((data) => (
                <div className="dashboard-data">
                  <Button  bsStyle="link" className="btn">
                      <Image src={cat_hover} alt="cat"/>
                    <p key={data.cat_id} >{data.category}</p>
                  </Button >
                </div>
              ))
              }  
          </div>
      </div>
		);
	};
}

export default Dashboard;