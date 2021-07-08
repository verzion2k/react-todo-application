import { Todo } from '@/types/types';
import { ActionTypes } from '../actionTypes';

export interface SetAction {
	type: ActionTypes.SET_TODOS;
	payload: Todo[];
}
export interface AddAction {
	type: ActionTypes.ADD_TODO;
	payload: string;
}
export interface RemoveAction {
	type: ActionTypes.REMOVE_TODO;
	payload: number;
}
export interface EditAction {
	type: ActionTypes.EDIT_TODO;
	payload: {
		id: number;
		title: string;
	};
}

export type Action = SetAction | AddAction | RemoveAction | EditAction;
