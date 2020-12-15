export const TASK = 'TASK';
export const task = (item) => ({
	type: 'TASK',
	item
});

export const ADD_TASK = 'ADD_TASK';
export const addTask = (addItem) => {
	return ({
		type: 'ADD_TASK',
		addItem
	});
}

