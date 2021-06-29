import { combineReducers } from 'redux'
import { todosReducer } from '@/features/todos/todosReducer'

export const rootReducer = combineReducers({
	todos: todosReducer,
})
