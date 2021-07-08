import { combineReducers } from 'redux'
import { todosReducer } from '@/store/reducers/todosReducer'

export const rootReducer = combineReducers({
	todos: todosReducer,
})
