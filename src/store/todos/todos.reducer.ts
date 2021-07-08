import { TodosActionTypes } from './todos.action.type';
import { TodoActions } from './todos.action.interface';
import { TodosState } from './todos.state.interface';
import { getNextTodoId } from './autoIncrement.util';

const initialState: TodosState = {
	todos: [],
};

export const todosReducer = (
	state: TodosState = initialState,
	action: TodoActions
) => {
	switch (action.type) {
		case TodosActionTypes.SET_TODOS: {
			return { ...state, todos: action.payload };
		}
		case TodosActionTypes.ADD_TODO: {
			return {
				...state,
				todos: [
					...state.todos,
					{
						id: getNextTodoId(state.todos),
						title: action.payload,
						isDone: false,
						creationTimestamp: new Date().toISOString(),
					},
				],
			};
		}
		case TodosActionTypes.REMOVE_TODO: {
			return {
				...state,
				todos: state.todos.filter(item => item.id !== action.payload),
			};
		}
		case TodosActionTypes.EDIT_TODO: {
			return {
				...state,
				todos: state.todos.map(el =>
					el.id === action.payload.id ? { ...el, title: action.payload.title } : el
				),
			};
		}
		default:
			return state;
	}
};
