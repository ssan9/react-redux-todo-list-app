import { TASK,
		 ADD_TASK,
		 DELETE_LIST,
		 DELETE_SELECTED_ITEM
} from '../actions/add-task';

const initialState = {
	task: '',
	allIds: [],
	byId: {}
}

export default function reducer(state=initialState, action) {
	switch(action.type) {
		case TASK:
			return {
				...state,
				task: action.item.target.value
			}
		case ADD_TASK:
			return {
				...state,
				allIds: [
					...state.allIds,
					action.id
				],
				byId: {
					...state.byId,
					[action.id]: {
						addItem: action.addItem
					}
				}
			}
		case DELETE_LIST:
			return {
				allIds: []
			}
		case DELETE_SELECTED_ITEM:
			let newTodos = [...state];
			newTodos = newTodos.filter(todo => todo.id !== action.id)
			return newTodos;
		default:
			return state
	}
}

