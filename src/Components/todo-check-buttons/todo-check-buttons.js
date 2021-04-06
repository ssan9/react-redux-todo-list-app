import React from 'react';
import './todo-check-buttons.css';
import * as Actions from '../../actions/add-task';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function TodoCheckButtons(props) {
	const handleDelete = (event) => {
		console.log('props.id', props.id, 'props.completed', props.completed);
		event.preventDefault();
		props.action.deleteSelectedItem(props.id); 
	}

	return(
		<div className="todo-check-buttons">
			<button className="mark delete-button box" onClick={handleDelete}>&#10005;</button>			
			{ props.completed ? <button className="mark completed-button box">&#10004;</button> :
			<button className="mark unchecked-button box">&#9744;</button> }									
		</div>		
	);
}

const mapStateToProps = (state) => ({
	task: state.task,
	done: state.done,
	todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
	action: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoCheckButtons);

