export const todosReducer = (state = {}, action) => {
	switch (action.type) {
		case 'addTodo': {
			return {
				...state,
			}
		}
		default:
			return state
	}
}
