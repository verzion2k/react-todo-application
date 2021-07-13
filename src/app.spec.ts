import { mockTodoData } from '../mocks/mockTodoData';
import { requestTodos } from './api/requestTodos';
import { setTodo } from './store/todos';

const unmockedFetch = global.fetch;

beforeAll(() => {
	global.fetch = () =>
		Promise.resolve<any>({
			todos: mockTodoData,
		});
});

afterAll(() => {
	global.fetch = unmockedFetch;
});

describe('app component test cases', () => {
	test('fetches todo data', async () => {
		const dispatch = jest.fn();
	});
});
