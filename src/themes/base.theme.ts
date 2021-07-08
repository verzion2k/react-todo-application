import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#354fa1',
			contrastText: '#829fea',
		},
		secondary: {
			main: '#98b5fe',
			dark: '#031a56',
			contrastText: '#ffffff',
		},
		error: {
			main: '#d43b3b',
		},
	},
})
