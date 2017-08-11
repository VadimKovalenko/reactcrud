import React from 'react';

export default class Note extends React.Component {
	render(){
		return (
			<div className = "note">
				<p>{this.props.note.text}</p>
			</div>
		)
	}

}