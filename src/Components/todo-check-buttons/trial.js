import React from 'react';
import './todo-check-buttons.css';
import * as Actions from '../../actions/add-task';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function TodoCheckButtons(props) {

	// const deleteSelectedListItem = () => (
	// 	props.action.deleteSelectedItem(props.id)
	// );

	const handleDelete = (event) => {
		console.log('props.id', props.id, 'props.completed', props.completed);
		event.preventDefault();
		// props.action.toggleTodo(props.id); 
		props.action.deleteSelectedItem(props.id); 
		// props.completed ? event.target.style.setProperty("text-decoration", "line-through") : 'none'
	}

	// const deleteStyle = {
	// 	textDecoration: "line-through",
	// 	color: red
	// }

	return(
		<div className="todo-check-buttons">
			<button className="mark delete-button" onClick={handleDelete} style={{textDecoration: props.completed ? 'line-through' :'none' }}>&#10005;</button>			
			<button className="mark completed-button">&#10004;</button>	
			<button className="mark unchecked-button">&#9744;</button>									
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

