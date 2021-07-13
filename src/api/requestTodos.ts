import { Todo } from '@/store/todos';
import {
	SetTodoActionCreator,
	TodoActions,
} from '@/store/todos/todos.action.interface';
import { Dispatch } from 'redux';

export interface RequestTodosProps {
	url: string;
	config?: any;
	action: SetTodoActionCreator;
	dispatch: Dispatch<TodoActions>;
}

export const requestTodos = async ({
	url,
	action,
	dispatch,
	config = {},
}: RequestTodosProps) => {
	const data: Todo[] = await fetch(url, config).then(response => {
		if (!response.ok) {
			throw new Error('Cannot fetch data');
		}

		return response.json();
	});

	dispatch(action(data));
};
