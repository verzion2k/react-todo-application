import { Container, createStyles, makeStyles } from '@material-ui/core'
import React from 'react'
import { TodoList } from './components/todoList/todoList'
import { useFetch } from './hooks/useFetch'

const useStyles = makeStyles(theme =>
	createStyles({
		root: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
			overflowY: 'hidden',
			padding: theme.spacing(2),
			backgroundColor: theme.palette.secondary.main,
		},
	})
)

const App: React.FC = () => {
	const { data } = useFetch(`${process.env.API_URL}todo`)
	const classes = useStyles()

	return (
		<Container className={classes.root} maxWidth='xl'>
			<TodoList todos={data} />
		</Container>
	)
}

export default App
