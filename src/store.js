import { createStore } from 'redux';
import reducer from './reducers/add-task';

const store = createStore(
	reducer
);

export default store;