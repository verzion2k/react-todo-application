import { useSelector } from 'react-redux';
import { Todo } from './todo.interface';
import { TodosState } from './todos.state.interface';

type TodosSelectorType = (state: { todos: TodosState }) => Todo[];

const todosSelector: TodosSelectorType = state => state.todos.todos;

export const useTodos = () => useSelector(todosSelector);
