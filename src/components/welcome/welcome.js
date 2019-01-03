import React from 'react'
import createBrowserHistory from 'history/createBrowserHistory'
import {Grid, Row, Col} from 'react-bootstrap'
import './welcome.css' 
import home_logo from '../../assets/home_logo2x.png'
import login_btn from '../../assets/login-button2x.png'
import fb_btn from '../../assets/login_with_fb2x.png'
import g_btn from '../../assets/login_with_google2x.png'




class Welcome extends React.Component {
	constructor(props, context) {
     	super(props, context);
  	}

	login = () => {
		console.log('login click', this.props);
		this.props.history.push('/signin');
	}

	render() {
		return(
			<div className="bg_image center_align container-fluid">
				<div className="  top_padding">
					<img src={home_logo} alt="home_logo" className="logo_image"/>
					<p className="hey">Hey, the town is yours!</p>
					<p className="discover">Discover nearby cool stuff</p>
				</div>
				<div className="login_div">
					<button className="login_button" onClick={this.login.bind(this)}> 
						<img src={login_btn} alt="login-button" className="login_btn"/>
					</button>
				</div>
				<Grid >
					<Row className="fb_view">
					<Col xs={6} sm={6} className=" textAlignEnd" >
						<img src={fb_btn} alt="fb_btn"  className="fb_btn " />
					</Col>
					<Col xs={6} sm={6} className="textAlignStart">
						<img src={g_btn} alt="google" className="g_btn"/>
					</Col>
					
					</Row>
				</Grid>
				<div className="new_member">
					<button type="button" className=" btn register">New member? REGISTER</button>
				</div>
				
			</div>
		);
	}
}

export default Welcome;