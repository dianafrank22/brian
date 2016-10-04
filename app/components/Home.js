import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import {getAlbumInfo, updateAlbumInfo, createSongArray} from '../actions/actions.js'
import albumData from '../../secret/albumData'
import Modal from './Modal'

export class Home extends React.Component {
	constructor(props){
		super(props)
		this.data = false
	}



	handleClick(index){
		const {dispatch, albumReducer} = this.props
		console.log(index)
		dispatch(getAlbumInfo(index)).then((data) =>{
			dispatch(updateAlbumInfo(data))
			dispatch(createSongArray(data))
		}, (err) => {
			console.log(err)
		})
	}


	handleInfoUpdate(data){
		this.data = data
		const {dispatch, albumReducer} = this.props
		dispatch(updateAlbumInfo(this.data))
	}



	render(){
		return(
		  <div className ="home_albumCovers">
		  <h2> Dose of HipHop </h2>
				<Modal/>
			 {albumData.albums.map((album, i) => (
			 	<div key={i} onClick={this.handleClick.bind(this, i)}>
           	 	  <img src={`app/public/img/${album.cover}`} data-toggle="modal" data-target="#myModal"/>

        		</div>
      		))}
		  </div>
		)
	}
}

function mapStateToProps(state){
	const {albumReducer} = state
	return {
		albumReducer
	}
}

export default connect(mapStateToProps)(Home)
