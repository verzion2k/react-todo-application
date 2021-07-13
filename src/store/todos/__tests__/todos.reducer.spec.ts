import {
	mockTodoData,
	mockTodoDataWithNewTitle,
	mockTodoDataWithoutFirst,
} from '@/../mocks/mockTodoData';
import { todosReducer } from '../todos.reducer';
import { TodosActionTypes } from '../todos.action.type';
import { TodosState } from '../todos.state.interface';

describe('todos reducer function', () => {
	test('SET_TODOS action type returns the state with the given payload', () => {
		const state: TodosState = todosReducer(
			{ todos: [] },
			{ type: TodosActionTypes.SET_TODOS, payload: mockTodoData }
		);

		expect(state).toEqual({ todos: mockTodoData });
	});

	test('ADD_TODO action type adds a todo to the state and returns it', () => {
		const state: TodosState = todosReducer(
			{ todos: [] },
			{ type: TodosActionTypes.ADD_TODO, payload: 'new todo' }
		);

		expect(state).toEqual({
			todos: [
				{
					id: 0,
					title: 'new todo',
					isDone: false,
					creationTimestamp: new Date().toISOString(),
				},
			],
		});
		expect(state.todos.length).toBe(1);
	});

	test('REMOVE_TODO action type removes a single todo and returns state', () => {
		const state: TodosState = todosReducer(
			{ todos: mockTodoData },
			{ type: TodosActionTypes.REMOVE_TODO, payload: 1 }
		);

		expect(state).toEqual({ todos: mockTodoDataWithoutFirst });
	});

	test('EDIT_TODO action type changes the selected todo title', () => {
		const state: TodosState = todosReducer(
			{ todos: mockTodoDataWithoutFirst },
			{ type: TodosActionTypes.EDIT_TODO, payload: { id: 2, title: 'new name' } }
		);

		expect(state).toEqual({ todos: mockTodoDataWithNewTitle });
	});

	test('should return default state', () => {
		expect(
			todosReducer(undefined, {
				type: TodosActionTypes.TEST_TODO,
				payload: 0,
			})
		).toEqual({ todos: [] });
	});
});
