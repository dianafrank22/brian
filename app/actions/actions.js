import albumData from "../../secret/albumData"
export const GET_ALBUM_INFO = "GET_ALBUM_INFO"
export const UPDATE_ALBUM_INFO = "UPDATE_ALBUM_INFO"
export const CREATE_SONG_ARRAY = "CREATE_SONG_ARRAY"



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

export function createSongArray(data){
	var song = []
	var info = {"url": 'app/public/tracks/'+data.audio, "cover": 'app/public/img/'+data.cover, "artist": {"song": data.title}}
	song.push(info)
	return{
		type: CREATE_SONG_ARRAY,
		songs: song
	}
}



// export function storeApiArray(apis){
// 	return {
// 		type: STORE_API_ARRAY,
// 		serviceAPIs: apis
// 	}
// }
