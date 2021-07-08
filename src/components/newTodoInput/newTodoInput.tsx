import { addTodoHandler } from '@/store/actionCreators'
import { TextField } from '@material-ui/core'
import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useStyles } from './styles'

export const NewTodoInput: React.FC = () => {
	const [input, setInput] = useState('')
	const classes = useStyles()
	const dispatch = useDispatch()

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInput(event.currentTarget.value)
	}

	const handleAddTodo =
		(title: string) => (event: KeyboardEvent<HTMLDivElement>) => {
			if (event.key === 'Enter') {
				dispatch(addTodoHandler(title))
				setInput('')
			}
		}

	return (
		<TextField
			className={classes.root}
			id='add-todos'
			label='Add new todo'
			onKeyUp={handleAddTodo(input)}
			onChange={handleInputChange}
			value={input}
		/>
	)
}