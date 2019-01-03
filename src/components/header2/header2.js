import React, {Component} from 'react';
import {Grid, Row, Col, Button, Image} from 'react-bootstrap'
import './header2.css'
import tab_grid_icon from '../../assets/tab_grid_icon2x.png'
import tab_list_icon from '../../assets/tab_list_icon2x.png'
import tab_camera_icon from '../../assets/tab_camera_icon2x.png'
import tab_myprofile_icon from '../../assets/tab_myprofile_icon2x.png'
import bell from '../../assets/bell2x.png'

export default class Footer extends Component {
	render(){
		return(
			<div className="header2">
				<div className="container">
	                <div className="row pt20">
	                    <div className="col-lg-2 col-md-2 col-sm-3 col-xs-6 at-full-wd480">
	                        <p><i className="icofont-phone"></i> +1 202 110 1122</p>
	                    </div>
	                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6 at-full-wd480">
	                        <p className="at-respo-right"><i className="icofont icofont-email"></i> <a href="#">info@yourmail.com</a>
	                        </p>
	                    </div>
	                    <div className="col-lg-2 col-lg-offset-3 col-md-3 col-md-offset-1 col-sm-3 col-xs-6 at-full-wd480">
	                        <div className="at-sign-in-up clearfix">
	                            <p><i className="icofont icofont-sign-in"></i><a href="sign-in-up.html">sign in</a>
	                            </p>
	                            <p><i className="icofont icofont-pencil-alt-2"></i> <a href="sign-in-up.html">sign up</a>
	                            </p>
	                        </div>
	                    </div>
	                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 at-full-wd480">
	                        <div className="at-social text-right">
	                            <a href="#"><i className="icofont-facebook" aria-hidden="true"></i></a>
	                            <a href="#"><i className="icofont-twitter" aria-hidden="true"></i></a>
	                            <a href="#"><i className="icofont-linkedin" aria-hidden="true"></i></a>
	                            <a href="#"><i className="icofont-dribbble" aria-hidden="true"></i></a>
	                            <a href="#"><i className="icofont-google-plus" aria-hidden="true"></i>
	                            </a>
	                        </div>
	                    </div>
	                </div>
            	</div>
			</div>
		)
	}
}