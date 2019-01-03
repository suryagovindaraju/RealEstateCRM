import React from 'react'
import {Grid, Row, Col, Image} from 'react-bootstrap'

import './signin.css'
import close_icon from '../../assets/close_icon3.png'
import login_btn from '../../assets/login-button2x.png'
import fb_btn from '../../assets/login_with_fb2x.png'
import g_btn from '../../assets/login_with_google2x.png'

class SignIn extends React.Component {
	constructor(props, context) {
     	super(props, context);
     	this.state = {
     		email:"one@gmail.com",
     		password:"12345678"
     	}
  	}
  	handleSignIn = () => {
  		console.log("username and password", this.state.email+ this.state.password);
  		var data = {
  			userName : this.state.email,
  			password : this.state.password
  		}
  		this.props.history.push({pathname:'/signup', state:data	});
  	}
  	goBack = () => {
  		this.props.history.goBack();
  	}
  	goForward = () => {
  		this.props.history.goForward();
  	}
  	enterEmail = (username) => {
  		this.setState({email:username.value})
  	}
  	enterPassword = (pwd) =>  {
  		this.setState({password:pwd.value});
  	}
	render() {
		return(
			<div className="signin_bg_image center_align container-fluid" >
				{/*<div className="row top_padding centered">
					<div className="col-3 col-sm-5">
						<img src={close_icon} alt="close_icon" className="close_icon "/>
					</div>
					<div className="col-9 col-sm-7">
						<p className="sign_with"> Signin with email</p>
					</div>
				</div>*/}
				<Grid >
					<Row className=" top_padding "> 
						
						<div>
						<Image src={close_icon} alt="close_icon" className="close_icon"/>
						 
						<p className="sign_with ">
						Signin with email</p>
						</div>
					
					</Row>
				
					<Row className="input_box justify-content-around">
						<Col xs={12} sm={12} className="email">
							<p className="lbl">EMAIL </p>
							<input className="input" type='email' value={this.state.email} name="email" onChange={this.enterEmail.bind(this)} placeholder="Email ID" required/> 
						</Col>
						<Col xs={12} sm={12} >
							<p className="lbl">PASSWORD</p>
							<input className="input" type="text" value={this.state.password} name="password" onChange={this.enterPassword.bind(this)} placeholder="Password" required/> 
						</Col>
					</Row>
				</Grid>

				<div className="login_div_signin">
					<button className="login_button" onClick={this.handleSignIn.bind(this)}> 
						<img src={login_btn} alt="login-button" className="login_btn"/>
					</button>
				</div>
				<div>
					<button type="button" className="btn btn_transparent">Forgot Password?</button> 
				</div>
				<Grid>
					<Row className="fb_view row">
						<Col xs={12} sm={12} className=" center_align">
							<p className="signin">Signin With</p>
						</Col>
						<Col xs={6} sm={6} className="textAlignEnd" >
							<img src={fb_btn} alt="fb_btn"  className="fb_btn " />
						</Col>
						<Col xs={6} sm={6} className=" textAlignStart">
							<img src={g_btn} alt="google" className="g_btn"/>
						</Col>
					</Row>
				</Grid>
				<div className="new_member_signin">
					<button type="button" className=" btn register">New member? REGISTER</button>
				</div>
				
			</div>
		);
	};
}

export default SignIn;