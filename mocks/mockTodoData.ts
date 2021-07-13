import { Todo } from '../src/store/todos';

export const mockTodoData: Todo[] = [
	{
		id: 1,
		creationTimestamp: '2019',
		isDone: false,
		title: 'first title',
	},
	{
		id: 2,
		creationTimestamp: '2020',
		isDone: true,
		title: 'second title',
	},
	{
		id: 3,
		creationTimestamp: '2021',
		isDone: false,
		title: 'third title',
	},
];

export const mockTodoDataWithoutFirst: Todo[] = [
	{
		id: 2,
		creationTimestamp: '2020',
		isDone: true,
		title: 'second title',
	},
	{
		id: 3,
		creationTimestamp: '2021',
		isDone: false,
		title: 'third title',
	},
];

export const mockTodoDataWithNewTitle: Todo[] = [
	{
		id: 2,
		creationTimestamp: '2020',
		isDone: true,
		title: 'new name',
	},
	{
		id: 3,
		creationTimestamp: '2021',
		isDone: false,
		title: 'third title',
	},
];
