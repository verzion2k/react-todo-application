import {
	AddTodoActionCreator,
	EditTodoActionCreator,
	RemoveTodoActionCreator,
	SetTodoActionCreator,
} from './todos.action.interface';
import { TodosActionTypes } from './todos.action.type';

export const addTodo: AddTodoActionCreator = title => ({
	type: TodosActionTypes.ADD_TODO,
	payload: title,
});

export const setTodo: SetTodoActionCreator = todos => ({
	type: TodosActionTypes.SET_TODOS,
	payload: todos,
});

export const removeTodo: RemoveTodoActionCreator = todoId => ({
	type: TodosActionTypes.REMOVE_TODO,
	payload: todoId,
});

export const editTodo: EditTodoActionCreator = todo => ({
	type: TodosActionTypes.EDIT_TODO,
	payload: todo,
});
