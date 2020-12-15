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

// const getId = (state) => ({
// 	state.todos.reduce((maixId, todo) => {
// 		return Math.max((todo.id, maxId));
// 	});
// });

// const getId = (state=initialState) => ({
// 	state.todos.reduce((maxId, todo) => ({
// 		Math.max(todo.id, maxId)
// 	}), -1) + 1
// });

// function getId(state) {
//   return state.todos.reduce((maxId, todo) => {
//     return Math.max(todo.id, maxId)
//   }, -1) + 1
// }

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
				console.log('allIds', state.allIds, 'byId', state.byId, 'action', action, 'action.id', action.id, 'state', state);
				let newTodos = [...state];
				newTodos = newTodos.filter(todo => todo.id !== action.id)
				return newTodos;
		default:
			console.log('state', state);
			return state
	}
}

