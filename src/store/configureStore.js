import { applyMiddleware, createStore } from 'redux'
//import { apiMiddleware } from 'redux-api-middleware';
import reducer from '../reducers'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from '../actions'
//import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

//const loggerMiddleware = createLogger()

// Create the history object
export const history = createBrowserHistory()

 
// Build the middleware
const middleware = routerMiddleware(history)

export function configureStore(preloadedState){
	return createStore(
		reducer,
		preloadedState,
		
		applyMiddleware(
			thunkMiddleware,
			middleware,
		//	loggerMiddleware
		)
	)
}