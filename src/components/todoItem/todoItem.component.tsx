import { Todo } from '@/store/todos/todo.interface';
import { removeTodo } from '@/store/todos/todos.action';
import {
	Checkbox,
	IconButton,
	ListItem,
	ListItemIcon,
	ListItemSecondaryAction,
	ListItemText,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import clsx from 'clsx';
import React from 'react';
import { useDispatch } from 'react-redux';
import { CheckboxStateType } from './todoItem.interface';
import { useStyles } from './todoItem.style';

export const TodoItem: React.FC<Todo> = ({
	id,
	isDone,
	title,
	creationTimestamp,
}) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [checkbox, setCheckbox] = React.useState<CheckboxStateType>(
		prevState => ({
			...prevState,
			[id]: isDone,
		})
	);

	const handleChange = React.useCallback(
		() =>
			setCheckbox(prevState => ({ ...prevState, [id]: !prevState[id].isDone })),
		[id]
	);

	const deleteTodo = React.useCallback(() => dispatch(removeTodo(id)), [id]);

	return (
		<ListItem dense button className={classes.root}>
			<ListItemIcon>
				<Checkbox
					edge='start'
					defaultChecked={isDone}
					disableRipple
					checked={checkbox[id].isDone}
					onChange={handleChange}
				/>
			</ListItemIcon>
			<ListItemText
				id={id.toString()}
				primary={title}
				classes={{
					primary: clsx({
						[classes.checked]: isDone,
					}),
				}}
			/>
			<ListItemSecondaryAction onClick={deleteTodo}>
				<IconButton edge='end' className={classes.delete}>
					<DeleteIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
};
