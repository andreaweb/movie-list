export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const REQUEST_MOVIE_DETAILS = 'REQUEST_MOVIE_DETAILS'
export const RECEIVE_MOVIE_DETAILS = 'RECEIVE_MOVIE_DETAILS'
export const SEARCH_MOVIES = 'SEARCH_MOVIES'

const apiSearch = "http://www.omdbapi.com/?apikey=8099235f&s=";
const apiDetails = "http://www.omdbapi.com/?apikey=8099235f&i=";

export function searchMovies(query, json){
	return {
		type: SEARCH_MOVIES,
		query
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

function requestMovieDetails(movieID){
	return {
		type: REQUEST_MOVIE_DETAILS,
		movieID
	}
}

function receiveMovieDetails(json){
	return {
		type: RECEIVE_MOVIE_DETAILS,
		movieDetails: json,
		receivedAt: Date.now()
	}
}


export function fetchMovies(query){
	return dispatch => {
		dispatch(requestMovies(query))
		return fetch(apiSearch+query)
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

export function fetchMovieDetails(movieID){
	return dispatch => {
		dispatch(requestMovieDetails(movieID))
		return fetch(apiDetails+movieID)
			.then(
				response => { 
					let results = response.json(); 
					return results
				}
			)
			.then(
				json => { 
					let results = json; 
					console.log(results); 
					dispatch(receiveMovieDetails(json))
				}
			)
	}
}