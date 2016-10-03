import albumData from "../../secret/albumData"
export const GET_ALBUM_INFO = "GET_ALBUM_INFO"
export const UPDATE_ALBUM_INFO = "UPDATE_ALBUM_INFO"
// display albums
// get all albums
// display albums

// get tracks
// get audio file
// update download
// update play
// update tracks
// update header
// update iamge


export function getAlbumInfo(index){
	return function (dispatch){
		return new Promise(function(resolve, reject){
			var album = albumData.albums[index]
			if(album === undefined || album === "" || album === null){
				reject(Err, 'No album data found')
			}else{
				var title = album.title
				var cover = album.cover
				var audio = album.audio
				var trackList = album.trackList
				var info = {'title': title, 'cover': cover, 'audio': audio, 'trackList': trackList}
				resolve(info)
			}
		})
	}
}

export function updateAlbumInfo(info){
	return {
		type: UPDATE_ALBUM_INFO,
		albumInfo: info
	}
}



// export function storeApiArray(apis){
// 	return {
// 		type: STORE_API_ARRAY,
// 		serviceAPIs: apis
// 	}
// }

