import React from 'react';
import './completely-delete-todo-item.css';
import * as Actions from '../../actions/add-task';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function TodoCheckButtons(props) {

	const deleteSelectedListItem = () => (
		props.action.deleteSelectedItem(props.id)
	);

	return(
		<div className="todo-check-buttons">
			<button className="mark delete-button" onClick={deleteSelectedListItem}>&#10005;</button>			
			<button className="mark completed-button">&#10004;</button>	
			<button className="mark unchecked-button">&#9744;</button>									
		</div>		
	);
}

const mapStateToProps = (state) => ({
	task: state.task
});

const mapDispatchToProps = (dispatch) => ({
	action: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoCheckButtons);

