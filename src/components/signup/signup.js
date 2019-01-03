import React from 'react'


import './signup.css'


const styles = {
  customWidth: {
    width: 300,
    color:'#F8F8F8',
  },
  selectedStyle:{
	color:'#000'
  },
  floatinglblStyle:{
  	color:"#FF0000"
  },
  text_width:{
  	width:'100%'

  },
  underlineStyle:{
  	marginLeft:-2
  },
};
 
class SignUp extends React.Component {
	constructor(props, context) {
     	super(props, context);
     	console.log('props in signup ', props);
     	this.state = {
     		value:0
     	}
  	}
  	handleSignUp = () => {
  		this.props.history.push('/dashboard');
  	}
  	goBack = () => {
  		this.props.history.goBack();
  	}
  	 handleChange = (event, index, value) => this.setState({value});
  	 handleSignUp = (event) => {
  	 	console.log('signup');
  	 }
  	
	render() {
		return(
			<div>
				<h1> SignUp </h1>
			</div>
		);
	};
}

export default SignUp;