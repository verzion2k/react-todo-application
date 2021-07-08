import { List } from '@material-ui/core';
import React from 'react';
import { Todo } from '@/store/todos/todo.interface';
import { NewTodoInput } from '@/components/newTodoInput';
import { TodoItem } from '@/components/todoItem';
import { useStyles } from './todoList.style';

export const TodoList: React.FC<{ todos: Todo[] }> = ({ todos }) => {
	const classes = useStyles();

	return (
		<List className={classes.root}>
			<NewTodoInput />
			{todos?.map(todo => (
				<TodoItem
					title={todo.title}
					id={todo.id}
					creationTimestamp={todo.creationTimestamp}
					isDone={todo.isDone}
					key={todo.id}
				/>
			))}
		</List>
	);
};
