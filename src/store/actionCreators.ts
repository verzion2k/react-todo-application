import { Todo } from '@/types/types'
import { ActionTypes } from './actionTypes'

export const addTodoHandler = (title: string) => ({
	type: ActionTypes.ADD_TODO,
	payload: title,
})

export const setTodosHandler = (todos: Todo[]) => ({
	type: ActionTypes.SET_TODOS,
	payload: todos,
})

export const removeTodoHandler = (todoId: number) => ({
	type: ActionTypes.REMOVE_TODO,
	payload: todoId,
})

export const updateTodoHandler = (todo: Todo) => ({
	type: ActionTypes.EDIT_TODO,
	payload: todo,
})
