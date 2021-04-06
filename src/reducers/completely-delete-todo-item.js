import { TASK,
		 ADD_TASK,
		 DELETE_LIST,
		 DELETE_SELECTED_ITEM
} from '../actions/completely-delete-todo-item';

const initialState = {
	task: '',
	todos: []
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
				todos: [
					...state.todos,
					{
						addItem: action.addItem,
						id: action.id
					}
				]
			}
		case DELETE_LIST:
			return {
				todos: []
			}
		case DELETE_SELECTED_ITEM:
			const items = state.todos.filter((todo, i) => todo.id !== action.id)
			return {
				...state,
				todos: items
			};
		default:
			return state
	}
}

