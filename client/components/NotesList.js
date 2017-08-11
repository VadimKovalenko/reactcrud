import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { fetchNotes } from './../actions/notesActions';

import store from './App';

import Note from './Note';
import NoteForm from './NoteForm';

class NotesList extends React.Component	{
	
	componentDidMount() {
		this.props.fetchNotes();
		//console.log("Component did mount state", this.state);
	}

	componentDidUpdate() {
		//console.log("This props Update", this.props.notes);	
	}

	render() {
		return (
			<div>
				<NoteForm/>
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