export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const REQUEST_MOVIE_DETAILS = 'REQUEST_MOVIE_DETAILS'
export const RECEIVE_MOVIE_DETAILS = 'RECEIVE_MOVIE_DETAILS'
export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const PUSH = 'ROUTER/PUSH';
export const REPLACE = 'ROUTER/REPLACE';
export const GO = 'ROUTER/GO';
export const GO_BACK = 'ROUTER/GO_BACK';
export const GO_FORWARD = 'ROUTER/GO_FORWARD';
export const LOCATION_CHANGE = 'ROUTER/LOCATION_CHANGE';

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
					if(!response.ok){
						console.log(response)
						throw new Error()
					}
					return response.json()
				}
			)
			.then(
				json => { 
					if(!json){
						console.log("Error: Json is ", json)
						throw new Error()
					}
					let results = json.Search; 
					dispatch(receiveMovies(json))
				}
			)
			.catch(
				error => console.log("Error: ", error)
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

export const push = (href) => ({
  type: PUSH,
  payload: href,
});
export const replace = (href) => ({
  type: REPLACE,
  payload: href,
});
export const go = (index) => ({
  type: GO,
  payload: index,
});
export const goBack = () => ({
  type: GO_BACK,
});
export const goForward = () => ({
  type: GO_FORWARD,
});
export const locationChange = ({ pathname, search, hash }) => ({
  type: LOCATION_CHANGE,
  payload: {
    pathname,
    search,
    hash,
  },
});
export function startListener(history, store) {
  store.dispatch(locationChange({
    pathname: history.location.pathname,
    search: history.location.search,
    hash: history.location.hash,
  }));
  history.listen((location) => {
    store.dispatch(locationChange({
      pathname: location.pathname,
      search: location.search,
      hash: location.hash,
    }));
  });
}

export const routerMiddleware = (history) => () => (next) => (action) => {
  switch (action.type) {
    case PUSH:
      history.push(action.payload);
      break;
    case REPLACE:
      history.replace(action.payload);
      break;
    case GO:
      history.go(action.payload);
      break;
    case GO_BACK:
      history.goBack();
      break;
    case GO_FORWARD:
      history.goForward();
      break;
    default:
      return next(action);
  }
};