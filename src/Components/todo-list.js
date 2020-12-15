import React from 'react';
import './todo-list.css';
import AddTask from './add-task/add-task';

export default class TodoList extends React.Component {
	render() {
		return(
			<div className="todo-list">
				<p className="heading">TO-DO LIST</p>
				<AddTask />
			</div>
		);
	}
}

