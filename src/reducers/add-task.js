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
			console.log('TASK called', 'action', action, 'state', state);
			return {
				...state,
				task: action.item.target.value
			}
		case ADD_TASK:
			console.log('ADD_TASK called', 'action', action, 'state', state);
			return {
				...state,
				todos: [
					...state.todos,
					{
						addItem: action.addItem,
						id: action.id,
						completed: false
					}
				]
			}
			case DELETE_LIST:
				return {
					todos: []
				}
			// case DELETE_SELECTED_ITEM:
			// 	console.log('action', action, 'action.id', action.id, 'state', state);
			// 	const items = state.todos.filter((todo, i) => todo.id !== action.id)
			// 	return {
			// 		...state,
			// 		todos: items
			// 	};
			case DELETE_SELECTED_ITEM:
				console.log('action', action, 'action.id', action.id, 'state', state);
				const items = state.todos.map((todo, i) => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
				return {
					...state,
					todos: items
				};
		default:
			console.log('state', state);
			return state
	}
}

