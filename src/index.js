import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore, history } from './configureStore'
import { startListener } from './actions'
import { push } from './actions'
import App from './App'
import './index.css'

const store = configureStore()

// Start the history listener
startListener(history, store)

// Now you can read location data from the store!
console.log(store.getState().routerReducer)
let currentLocation = store.getState().routerReducer.pathname

// You can also subscribe to changes in the location!
let unsubscribe = store.subscribe(() => {
  let previousLocation = currentLocation
  currentLocation = store.getState().routerReducer.pathname
  if (previousLocation !== currentLocation) {
    // You can render your application reactively here!
  }
})

ReactDOM.render(
	<App store={store} />
	, document.getElementById('root')
	)
