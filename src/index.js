import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore, history } from './store/configureStore'
import { startListener } from './actions'
import App from './components/App'
import './index.css'

const store = configureStore()

// Start the history listener
startListener(history, store)

// to read location data from the store!
//console.log(store.getState().routerReducer)
//let currentLocation = store.getState().routerReducer.pathname


ReactDOM.render(
	<App store={store} />
	, document.getElementById('root')
	)
