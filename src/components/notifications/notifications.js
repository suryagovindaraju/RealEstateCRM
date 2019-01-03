import React,{Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import './notifications.css'

export default class Notifications extends Component {
	constructor(props, context) {
     	super(props, context);
		this.state = {
			notificationData:[{title:'One', date:'25/05/2018'},
								{title:'Two', date:'25/05/2018'},
								{title:'Three', date:'25/05/2018'},
								{title:'Four', date:'25/05/2018'},
								{title:'Five', date:'25/05/2018'},
								{title:'Six', date:'25/05/2018'},
								{title:'Seven', date:'25/05/2018'},
								{title:'Eight', date:'25/05/2018'},
								{title:'Nine', date:'25/05/2018'},
								{title:'Ten', date:'25/05/2018'},
								{title:'Eleven', date:'25/05/2018'},
								{title:'Twelve', date:'25/05/2018'},
								{title:'Thirteen', date:'25/05/2018'},
								{title:'Fourteen', date:'25/05/2018'},
								{title:'Fifteen', date:'25/05/2018'},
								{title:'Sixteen', date:'25/05/2018'},
								{title:'Seventeen', date:'25/05/2018'},
								{title:'Eighteen', date:'25/05/2018'},
								{title:'Nineteen', date:'25/05/2018'},
								{title:'Twenty', date:'25/05/2018'},
								{title:'Twentyone', date:'25/05/2018'},
								{title:'Twentytwo', date:'25/05/2018'},
								{title:'TwentyThree', date:'25/05/2018'},
								{title:'TwentyFour', date:'25/05/2018'},
								{title:'TwentyFive', date:'25/05/2018'}
								
								]
		}
	}
	render() {
		return(
			
			<div style={{paddingTop:'30px', marginBottom:'60px'}}>
				<div className="notify-heaader">
					<h1>Notifications</h1>
				</div>
				<div className="notification-data">
					<div >
							
					{ this.state.notificationData && this.state.notificationData.map((notification) => (
						<Grid>
								<Row className="notification-item">
									<Col xs={6} md={6}>
										<h2>{notification.title}</h2>
									</Col>
									<Col xs={6} dm={6}>
										<h3>{notification.date}</h3>
									</Col>

									
									
								</Row>
								<Row>
									<Col xs={12} md={12}>
										<div style={{height:'1px'}}></div>
									</Col>
								</Row>

							</Grid>
					))


					}
						
						</div> 
				</div>
			</div>

		);
	}
}