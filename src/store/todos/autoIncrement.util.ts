import { Todo } from './todo.interface';

export const getNextTodoId = (todos: Todo[]): number =>
	todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 0;
