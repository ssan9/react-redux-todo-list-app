import { TASK,
		 ADD_TASK
} from '../actions/add-task';

const initialState = {
	task: '',
	addedTask: ''
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
				addedTask: action.addItem
			}
		default:
			console.log('state', state);
			return state
	}
}

