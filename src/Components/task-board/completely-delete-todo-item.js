import React from 'react';
import './completely-delete-todo-item.css';
import TodoCheckButtons from '../todo-check-buttons/todo-check-buttons';
import * as Actions from '../../actions/add-task';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function TaskBoard(props) {
	console.log('props.taskboard.todo', props.but);

	return(
		<div className="task-board">
			<div className="trial">
				<TodoCheckButtons id={props.id} />
				<div className="todos-list">{props.todos}</div>
				<div className="line-break"></div>
			</div>
		</div>
	);
}


const mapDispatchToProps = (dispatch) => ({
	action: bindActionCreators(Actions, dispatch)
});

export default connect(null, mapDispatchToProps)(TaskBoard);