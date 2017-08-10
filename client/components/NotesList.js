import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { fetchNotes } from './../actions/notesActions';

import store from './App';

import Note from './Note';

class NotesList extends React.Component	{

	constructor(props) {
		super(props);
		/*this.state = {
			notes: ""
		};*/
		//console.log("NoteList first state ", this.state.notes)
	}

	componentDidMount() {
		this.props.fetchNotes();
		//console.log("Component did mount props", this.props.notes);
		console.log("Component did mount state", this.state);
	}

	componentWillReceiveProps() {
		//console.log("Will received props ", this.props.notes)
		console.log("This state on WillReceiveProps ", this.state);
	}

	render() {
		let result = this.props.notes;
		console.log(result);
		return (
			<div>
				<ul>
					{this.props.notes.map((note) => 
						<Note note={note} key={note._id}/>)}
				</ul>
			</div>
		);
 }
}

NotesList.propTypes = {
	notes: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
	return {
		notes: state.notes
	}
}

export default connect(mapStateToProps, {fetchNotes})(NotesList);