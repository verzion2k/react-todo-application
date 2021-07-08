import { addTodo } from '@/store/todos';
import { TextField } from '@material-ui/core';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useStyles } from './newTodoInput.style';

export const NewTodoInput: React.FC = () => {
	const [input, setInput] = useState('');
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleInputChange = React.useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setInput(event.currentTarget.value);
		},
		[]
	);

	const handleAddTodo = React.useCallback(
		(title: string) => (event: KeyboardEvent<HTMLDivElement>) => {
			if (event.key === 'Enter') {
				dispatch(addTodo(title));
				setInput('');
			}
		},
		[]
	);

	return (
		<TextField
			className={classes.root}
			id='add-todos'
			label='Add new todo'
			onKeyUp={handleAddTodo(input)}
			onChange={handleInputChange}
			value={input}
		/>
	);
};
