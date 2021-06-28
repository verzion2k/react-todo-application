import { combineReducers } from 'redux'
import { todosReducer } from 'src/features/todos/todosReducer'

export const rootReducer = combineReducers({
	todos: todosReducer,
})
