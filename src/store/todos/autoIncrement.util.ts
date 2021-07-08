import { Todo } from './todo.interface';

export const getNextTodoId = (todos: Todo[]): number => {
	const maxId = Math.max(...todos.map(todo => todo.id));
	return maxId + 1;
};
