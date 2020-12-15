import React from 'react';
import './clear.css';
import * as Actions from '../../actions/add-task';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function Clear(props){
	const handleClick = (event) => (
		props.action.deleteList(event)
	);

	return(
		<div className='clear'>
			{<button className="clear-button" onClick={handleClick}>Clear</button>}
		</div>
	);
}

const mapDispatchToProps = (dispatch) => ({
	action: bindActionCreators(Actions, dispatch)
});

export default connect(null, mapDispatchToProps)(Clear);