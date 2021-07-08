export interface CheckboxState {
	[id: number]: boolean;
}

export type CheckboxStateType = (prevState: CheckboxState) => CheckboxState;
