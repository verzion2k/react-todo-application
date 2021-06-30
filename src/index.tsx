import ReactDOM from 'react-dom'
import React from 'react'
import App from '@/App'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { ThemeProvider } from '@material-ui/core'
import { theme } from '@/themes/base.theme'

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>,
	document.getElementById('root')
)
