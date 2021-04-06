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
			return {
				...state,
				task: action.item.target.value
			}
		case ADD_TASK:
			return {
				...state,
				addedTask: action.addItem
			}
		default:
			return state
	}
}

