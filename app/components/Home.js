import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import {getAlbumInfo, updateAlbumInfo} from '../actions/actions.js'
import albumData from '../../secret/albumData'

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
			 {albumData.albums.map((album, i) => (
			 	<div key={i} onClick={this.handleClick.bind(this, i)}>
           	 	  <img src={`app/public/img/${album.cover}`}/>
		
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
