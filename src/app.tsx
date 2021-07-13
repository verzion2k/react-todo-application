import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';
import { TodoList } from '@/components/todoList';
import { setTodo } from '@/store/todos/todos.action';
import { useTodos } from '@/store/todos';
import { useStyles } from '@/app.style';
import { requestTodos } from './api/requestTodos';

export const App: React.FC = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const todos = useTodos();

	React.useEffect(() => {
		requestTodos({
			url: `${process.env.API_URL}todo`,
			dispatch,
			action: setTodo,
		});
	}, []);

	return (
		<Container className={classes.root} maxWidth='xl'>
			<TodoList todos={todos} />
		</Container>
	);
};
