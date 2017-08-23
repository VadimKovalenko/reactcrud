import React, { Component } from 'react';

import { connect } from 'react-redux';

import { deleteNote, UpdatingNote } from './../actions/notesActions';

class Note extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showTextarea: false,
			note: this.props.note,
			noteText: this.props.note.text
		};
		this.startEditNote = this.startEditNote.bind(this);
		this.handleNoteText = this.handleNoteText.bind(this);
		this.discardEditNote = this.discardEditNote.bind(this);
		this.saveEditNote = this.saveEditNote.bind(this);
		this.startDeleteNote = this.startDeleteNote.bind(this);
	}

	startEditNote(e) {
		this.setState({ showTextarea: true })
	}

	handleNoteText(e) {
		this.setState({
			noteText: e.target.value 
		})
	}

	discardEditNote() {
		this.setState({
			noteText: this.props.note.text,
			showTextarea: false
		})
	}

	saveEditNote() {
		let text = this.state.noteText
		let id = this.props.note._id
		this.props.UpdatingNote({id, text})
		this.setState({
			showTextarea: false 
		})
	}

	startDeleteNote() {
		let id = this.props.note._id
		this.props.deleteNote(id)
	}

	render() {

		let textArea = null;

		if (!this.state.showTextarea) {
			textArea = <p>{this.state.noteText}</p>
		}	else {
			textArea = <div className="text-area-wrap">
									 <textarea type="text" value = {this.state.noteText} onChange = {this.handleNoteText}></textarea>
									 <button className = "edit-note-btn" onClick={this.saveEditNote}><i className="fa fa-check" aria-hidden="true"></i></button>
									 <button className = "discard-edit-note-btn" onClick={this.discardEditNote}><i className="fa fa-share" aria-hidden="true"></i></button>
								 </div>
		}

		return (
			<div className = "note" style={{ backgroundColor: this.props.note.color }} onDoubleClick={this.startEditNote}>
				<div className = "del-btn-wrapper"><button className = "del-btn" onClick={this.startDeleteNote}><i className="fa fa-times" aria-hidden="true"></i></button></div>
				<div className = "note-text-wrapper">{textArea}</div>
			</div>
		)
	}

}

Note.propTypes = {
  note: React.PropTypes.object.isRequired,
  deleteNote: React.PropTypes.func.isRequired,
  UpdatingNote: React.PropTypes.func.isRequired
}

export default connect(null, { deleteNote, UpdatingNote })(Note);