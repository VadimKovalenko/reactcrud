import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { fetchNotes } from './../actions/notesActions';
import { CSSTransitionGroup } from 'react-transition-group';

import store from './App';

import Note from './Note';
import NoteForm from './NoteForm';

class NotesList extends React.Component	{
	
	componentDidMount() {
		this.props.fetchNotes();
	}


	render() {
		return (
			<div>
				<NoteForm/>
					<ul>
					<CSSTransitionGroup
          transitionName="note-animation"
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={300}>
						{this.props.notes.map((note) => 
							<Note note={note} key={note._id}/>)}
					</CSSTransitionGroup>	
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