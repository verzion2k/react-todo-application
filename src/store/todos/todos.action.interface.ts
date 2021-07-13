import { TodosActionTypes } from './todos.action.type';
import { Todo } from './todo.interface';

export interface SetTodoAction {
	type: TodosActionTypes.SET_TODOS;
	payload: Todo[];
}
export interface AddTodoAction {
	type: TodosActionTypes.ADD_TODO;
	payload: string;
}
export interface RemoveTodoAction {
	type: TodosActionTypes.REMOVE_TODO;
	payload: number;
}
export interface EditTodoAction {
	type: TodosActionTypes.EDIT_TODO;
	payload: {
		id: number;
		title: string;
	};
}

interface TestTodoAction {
	type: TodosActionTypes.TEST_TODO;
	payload: number;
}

export type TodoActions =
	| SetTodoAction
	| AddTodoAction
	| RemoveTodoAction
	| EditTodoAction
	| TestTodoAction;

export type SetTodoActionCreator = (todos: Todo[]) => SetTodoAction;
export type AddTodoActionCreator = (title: string) => AddTodoAction;
export type RemoveTodoActionCreator = (id: number) => RemoveTodoAction;
export type EditTodoActionCreator = ({
	id: number,
	title: string,
}) => EditTodoAction;
