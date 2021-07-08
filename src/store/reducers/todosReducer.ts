import { setTodosHandler } from '@/store/actionCreators';
import { ActionTypes } from '@/store/actionTypes';
import { RootState, Todo } from '@/types/types';
import { Dispatch } from 'redux';
import { Action } from '../actions';

const initialState: RootState = {
	todos: [],
};

const nextTodoId = (todos: Todo[]) => {
	const maxId = todos.reduce((id, todo) => Math.max(todo.id, id), -1);
	return maxId + 1;
};

export const todosReducer = (
	state: RootState = initialState,
	action: Action
) => {
	switch (action.type) {
		case ActionTypes.SET_TODOS: {
			return { ...state, todos: action.payload };
		}
		case ActionTypes.ADD_TODO: {
			return {
				...state,
				todos: [
					...state.todos,
					{
						id: nextTodoId(state.todos),
						title: action.payload,
						isDone: false,
						creationTimestamp: new Date().toISOString(),
					},
				],
			};
		}
		case ActionTypes.REMOVE_TODO: {
			return {
				...state,
				todos: state.todos.filter(item => item.id !== action.payload),
			};
		}
		case ActionTypes.EDIT_TODO: {
			return {
				...state,
				todos: state.todos.map(el =>
					el.id === action.payload.id ? { ...el, title: action.payload } : el
				),
			};
		}
		default:
			return state;
	}
};

export const fetchTodoData = () => async (dispatch: Dispatch) => {
	const todos = await fetch(`${process.env.API_URL}todo`).then(res => {
		if (!res.ok) {
			throw new Error("Can't fetch todo data");
		}

		return res.json();
	});

	dispatch(setTodosHandler(todos));
};
