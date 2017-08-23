import React from 'react';
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux';
import { Component } from 'react';
import { fetchNotes } from './../actions/notesActions';

import store from './App';

import Note from './Note';
import NoteForm from './NoteForm';

class NotesList extends React.Component	{
	constructor(props) {
		super(props);
		const masonryOptions = {
			itemSelector: '.note',
			columnWidth: 250,
			gutter: 10,
			isFitWidth: true
		}
	}

	
	componentDidMount() {
		this.props.fetchNotes();
	}


	render() {
		return (
			<div>
				<NoteForm/>
        <Masonry className="notes-container">
					{this.props.notes.map((note) => 
						<Note note={note} key={note._id}/>)}
				</Masonry>
			</div>
		);
 }
}

NotesList.propTypes = {
	notes: React.PropTypes.array.isRequired,
	fetchNotes: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
	return {
		notes: state.notes
	}
}

export default connect(mapStateToProps, {fetchNotes})(NotesList);