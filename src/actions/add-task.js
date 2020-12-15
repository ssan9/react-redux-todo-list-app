export const TASK = 'TASK';
export const task = (item) => ({
	type: 'TASK',
	item
});

let addedId = 0

export const ADD_TASK = 'ADD_TASK';
export const addTask = (addItem) => {
	return ({
		type: 'ADD_TASK',
		id: addedId++,
		addItem
	});
}

export const DELETE_LIST = 'DELETE_LIST';
export const deleteList = () => {
	return ({
		type: DELETE_LIST
	})
}

// let deleteId = 0

export const DELETE_SELECTED_ITEM = 'DELETE_SELECTED_ITEM';
export const deleteSelectedItem = (id) => ({
	type: DELETE_SELECTED_ITEM,
	id
});

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	id
});
