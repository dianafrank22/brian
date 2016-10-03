import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import {actions} from '../actions/actions.js'
import Home from '../components/Home'

export default class Main extends Component {


	render(){
		return(
			<div className="Home">
				<Home>
			</div>
			)
	}
}
