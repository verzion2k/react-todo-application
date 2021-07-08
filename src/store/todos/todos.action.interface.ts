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

export type TodoActions =
	| SetTodoAction
	| AddTodoAction
	| RemoveTodoAction
	| EditTodoAction;

export type SetTodoActionCreator = (title: Todo[]) => SetTodoAction;
export type AddTodoActionCreator = (title: string) => AddTodoAction;
export type RemoveTodoActionCreator = (title: number) => RemoveTodoAction;
export type EditTodoActionCreator = ({
	id: number,
	title: string,
}) => EditTodoAction;
