export interface Todo {
	id: number;
	title: string;
	isDone: boolean;
	creationTimestamp: string;
}

export type TodoAction = {
	type: string;
	todo: Todo;
};

export type DispatchType = (args: TodoAction) => TodoAction;

export interface RootState {
	todos: Todo[];
}

export interface SelectorTodoState {
	todos: {
		todos: Todo[];
	};
}
