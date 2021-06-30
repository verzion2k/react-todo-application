import { List } from '@material-ui/core'
import React from 'react'
import { TodoItem } from '../todoItem/todoItem'
import { TodoListProps } from './interface'
import { useStyles } from './styles'

const TodoListComponent: React.FC<TodoListProps> = ({ todos }) => {
	const classes = useStyles()

	return (
		<List className={classes.root}>
			{todos?.map(todo => (
				<React.Fragment key={todo.id}>
					<TodoItem
						title={todo.title}
						id={todo.id}
						creationTimestamp={todo.creationTimestamp}
						isDone={todo.isDone}
					/>
				</React.Fragment>
			))}
		</List>
	)
}

export const TodoList = React.memo(TodoListComponent)
