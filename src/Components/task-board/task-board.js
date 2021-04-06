import React from 'react';
import './task-board.css';
import TodoCheckButtons from '../todo-check-buttons/todo-check-buttons';
import * as Actions from '../../actions/add-task';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function TaskBoard(props) {
	return(
		<div className="task-board">
			<div className="trial">
				<TodoCheckButtons id={props.id} completed={props.completed} />
				<div className="todos-list" style={{ textDecoration: props.completed ? 'line-through' : 'none', color: props.completed ? 'red' : 'none' }}>{props.todos}</div>
				<div className="line-break"></div>
			</div>
		</div>
	);
}


const mapDispatchToProps = (dispatch) => ({
	action: bindActionCreators(Actions, dispatch)
});

export default connect(null, mapDispatchToProps)(TaskBoard);