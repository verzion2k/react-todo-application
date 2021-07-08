import { removeTodoHandler } from '@/store/actionCreators';
import { Todo } from '@/types/types';
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
import { useStyles } from './styles';

export const TodoItem: React.FC<Todo> = ({
	id,
	isDone,
	title,
	creationTimestamp,
}) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const deleteTodo = React.useCallback(() => {
		dispatch(removeTodoHandler(id));
	}, []);

	return (
		<ListItem role={undefined} dense button className={classes.root}>
			<ListItemIcon>
				<Checkbox edge='start' checked={isDone} tabIndex={-1} disableRipple />
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
