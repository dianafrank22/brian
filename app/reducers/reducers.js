import {combineReducers} from 'redux'
// import actions from actions

export function albumReducer(state={}, action){
	switch(action.type){
		case 'UPDATE_ALBUM_INFO':
      	  return Object.assign({}, state, {
          albumInfo: action.albumInfo
      	})
		case 'CREATE_SONG_ARRAY':
					return Object.assign({}, state, {
						songs: action.songs
					})
		default:
		return state
	}
}


const rootReducer = combineReducers({
	albumReducer
})

export default rootReducer
