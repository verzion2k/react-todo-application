import { mockTodoData } from '@/../mocks/mockTodoData';
import { getNextTodoId } from '../autoIncrement.util';

describe('autoIncrement function', () => {
	test('increments the latest id', () => {
		const nextId = getNextTodoId(mockTodoData);

		expect(nextId).toBe(4);
	});

	test('sets the id to zero if array doesnt contain items', () => {
		const nextId = getNextTodoId([]);

		expect(nextId).toBe(0);
	});
});
