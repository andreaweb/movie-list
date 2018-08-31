import { createStore, applyMiddleware } from 'redux'
//import { apiMiddleware } from 'redux-api-middleware';
import reducer from './reducers'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState){
	return createStore(
		reducer,
		preloadedState,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	)
}