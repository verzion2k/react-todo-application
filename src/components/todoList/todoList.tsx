import { RootState } from '@/types/types'
import { List } from '@material-ui/core'
import React from 'react'
import { NewTodoInput } from '../newTodoInput/newTodoInput'
import { TodoItem } from '../todoItem/todoItem'
import { useStyles } from './styles'

const TodoListComponent: React.FC<RootState> = ({ todos }) => {
	const classes = useStyles()

	return (
		<List className={classes.root}>
			<NewTodoInput />
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
