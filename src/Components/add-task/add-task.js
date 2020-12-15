import React from 'react';
import './add-task.css';
import TaskBoard from '../task-board/task-board';
import * as Actions from '../../actions/add-task';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Clear from '../clear/clear';

class AddTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submit: '',
			input: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			input: event.target.value
		})
		this.props.action.task(event);
		console.log('this.props.action', this.props.action);
	}

	handleSubmit(event) {
		event.preventDefault();
		event.stopPropagation();
		console.log('this.props.action', this.props.action);
		this.setState({
			submit: this.props.task,
			input: ''
		});
		this.props.action.addTask(this.props.task);
		console.log('handleSubmit', this.props.task);
	}

	render() {
		console.log('todo-props', this.props.todos);
		console.log('this.state.submit', this.state.submit);

		let todoList;

		if(this.props.todos) {
			todoList = Object.values(this.props.todos).map((todo, i) => {
				console.log('todo', todo.addItem);
				return (
					<li key={i}>
						<TaskBoard
							todos={todo.addItem} 
							id={todo.id}
							completed={todo.completed}
						/>
					</li>
				);
			});		
		} 

		let shouldDisplay = this.state.submit !== '' && this.props.todos.length !== 0  ? 'display-list' : 'hide';

		return(
			<div className="add-task">
				<form onSubmit={this.handleSubmit}>
					<div className="add-search">
						<input type="text"
							className="add-input"
							placeholder="new task"
							// value={this.props.addedTask}
							value={this.state.input}
							onChange={this.handleChange}
							name="add-input" />
						<button type="submit"
							onSubmit={this.handleSubmit}
							className="add-task-button">
							ADD
						</button>
					</div>
				</form>
				<div className="list">
					<ul className={`${shouldDisplay}`}>
						{this.props.todos && todoList}
					</ul>
					{this.state.submit && this.props.todos.length !== 0 && <Clear todos={this.props.todos} />}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	task: state.task,
	todos: state.todos,
	byId: state.byId
});

const mapDispatchToProps = (dispatch) => ({
	action: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);