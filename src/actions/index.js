export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS'

export function searchMovies(query, json){
	return {
		type: SEARCH_MOVIES,
		query
	}
}

export function getMovieDetails(movieID){
	return {
		type: GET_MOVIE_DETAILS,
		movieID
	}
}

function requestMovies(query){
	return {
		type: REQUEST_MOVIES,
		query
	}
}

function receiveMovies(json){
	return {
		type: RECEIVE_MOVIES,
		movies: json,
		receivedAt: Date.now()
	}
}

export function fetchMovies(query){
	return dispatch => {
		dispatch(requestMovies(query))
		return fetch("http://www.omdbapi.com/?apikey=8099235f&s="+query)
			.then(
				response => { 
					let results = response.json(); 
					return results
				}
			)
			.then(
				json => { 
					let results = json.Search; 
					console.log(results.map(movie => movie)); 
					dispatch(receiveMovies(json))
				}
			)
	}
}