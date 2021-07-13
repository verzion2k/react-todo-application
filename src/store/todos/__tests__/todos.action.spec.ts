import { mockTodoData } from '@/../mocks/mockTodoData';
import { addTodo, editTodo, removeTodo, setTodo } from '../todos.action';
import { TodosActionTypes } from '../todos.action.type';

describe('Todo actions', () => {
	test('addTodo fn adds title to payload', () => {
		expect(addTodo('test')).toEqual({
			type: TodosActionTypes.ADD_TODO,
			payload: 'test',
		});
	});

	test('setTodo fn adds todos to payload', () => {
		expect(setTodo(mockTodoData)).toEqual({
			type: TodosActionTypes.SET_TODOS,
			payload: mockTodoData,
		});
	});

	test('removeTodo fn adds todoId to payload', () => {
		expect(removeTodo(1)).toEqual({
			type: TodosActionTypes.REMOVE_TODO,
			payload: 1,
		});
	});

	test('editTodo fn adds todo to payload', () => {
		expect(editTodo(mockTodoData[0])).toEqual({
			type: TodosActionTypes.EDIT_TODO,
			payload: mockTodoData[0],
		});
	});
});
