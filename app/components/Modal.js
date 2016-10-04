import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import {getAlbumInfo, updateAlbumInfo} from '../actions/actions.js'
import albumData from '../../secret/albumData'
import ReactAudioPlayer from 'react-audio-player'

export class Modal extends React.Component {
	constructor(props){
		super(props)
		this.data = false
	}


	render(){
    const {dispatch, albumReducer} = this.props
    const album = (this.props.albumReducer.albumInfo) ? this.props.albumReducer.albumInfo : {	"title": "May Mix",	"cover": "maymix1.png","audio": "01 mayyymixxx16.mp3", "trackList": ["1", "2", "3", "4"]}
	const songs = (this.props.albumReducer.songs) ? this.props.albumReducer.songs : ""
		return(
		  <div className ="album_info_modal">

      	<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        	<div className="modal-dialog" role="document">
          	<div className="modal-content">
            	<div className="modal-header">
              	<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            	</div>
	            	<div className="modal-body">
	            		<h3>  {album.title}</h3>
									<h4> Tracks </h4>
	              	{album.trackList.map((track, i) =>
										<ul key={i} className="trackList">
										<li key={i} className="tracks">{track}</li>
										</ul>
									)}
									<div className='audioTrack'>
							 			<img src={`app/public/img/${album.cover}`}/>
										<ReactAudioPlayer src={`app/public/tracks/${album.audio}`}/>
									</div>
  							</div>
            <div className="modal-footer">
            <a href={`app/public/tracks/${album.audio}`} download={album.audio}>Download</a>
            </div>
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps)(Modal)
