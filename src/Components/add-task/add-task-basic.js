import React from 'react';
import './add-task.css';
import TaskBoard from '../task-board/task-board';
import * as Actions from '../../actions/add-task';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddTask extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.props.action.task(event);
	}

	handleSubmit(event) {
		event.preventDefault();
		event.stopPropagation();
		this.props.action.addTask(this.props.task);
	}

	render() {
		return(
			<div className="add-task">
				<form onSubmit={this.handleSubmit}>
					<div className="add-search">
						<input type="text"
							className="add-input"
							placeholder="new task"
							value={this.props.addedTask}
							onChange={this.handleChange}
							name="add-input" />
						<button type="submit"
							onSubmit={this.handleSubmit}
							className="add-task-button">
							ADD
						</button>
						<h1>{this.props.addedTask}</h1>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	task: state.task,
	addedTask: state.addedTask
});

const mapDispatchToProps = (dispatch) => ({
	action: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);