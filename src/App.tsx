import { Container, createStyles, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TodoList } from './components/todoList/todoList';
import { fetchTodoData } from './store/reducers/todosReducer';
import { RootState, SelectorTodoState } from './types/types';

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
);

const App: React.FC = () => {
	const state = useSelector((data: SelectorTodoState) => data.todos);
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTodoData());
	}, []);

	return (
		<Container className={classes.root} maxWidth='xl'>
			<TodoList todos={state.todos} />
		</Container>
	);
};

export default App;
