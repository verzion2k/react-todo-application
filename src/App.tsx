import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Container } from '@material-ui/core';
import { TodoList } from '@/components/todoList';
import { setTodo } from '@/store/todos/todos.action';
import { SetTodoAction, useTodos } from '@/store/todos';
import { useStyles } from './App.style';

export const fetchTodoData =
	() => async (dispatch: Dispatch<SetTodoAction>) => {
		const todos = await fetch(`${process.env.API_URL}todo`).then(res => {
			if (!res.ok) {
				throw new Error("Can't fetch todo data");
			}

			return res.json();
		});

		dispatch(setTodo(todos));
	};

const App: React.FC = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const todos = useTodos();

	React.useEffect(() => {
		dispatch(fetchTodoData());
	}, []);

	return (
		<Container className={classes.root} maxWidth='xl'>
			<TodoList todos={todos} />
		</Container>
	);
};

export default App;
