import ReactDOM from 'react-dom'
import React from 'react'
import App from 'src/App'
import { Provider } from 'react-redux'
import { store } from 'src/store'

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
