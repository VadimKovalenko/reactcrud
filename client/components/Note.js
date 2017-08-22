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
		console.log("Note id in startDeleteNote is " + id)
		this.props.deleteNote(id)
	}

	componentWillUnmount() {
		console.log("Note deleted")
	}

	render() {

		let textArea = null;

		if (!this.state.showTextarea) {
			textArea = <p>{this.state.noteText}</p>
		}	else {
			textArea = <div className="text-area-wrap">
									 <input type="text" value={this.state.noteText} onChange = {this.handleNoteText}/>
									 <button onClick={this.saveEditNote}><i className="fa fa-check" aria-hidden="true"></i></button>
									 <button onClick={this.discardEditNote}><i className="fa fa-share" aria-hidden="true"></i></button>
								 </div>
		}

		return (
			<div className = "note" style={{ backgroundColor: this.props.note.color }} onDoubleClick={this.startEditNote}>
				<button className = "del-btn" onClick={this.startDeleteNote}><i className="fa fa-times" aria-hidden="true"></i></button>
				{textArea}
			</div>
		)
	}

}

Note.propTypes = {
  note: React.PropTypes.object.isRequired,
  deleteNote: React.PropTypes.func.isRequired
}

/*function mapStateToProps(state) {
	return {
		notes: state.notes
	}
}*/

export default connect(/*mapStateToProps,*/null, { deleteNote, UpdatingNote })(Note);
/*export default connect(
	state => ({
		//note: state.note
	}),
	dispatch => ({
		id => {
			dispatch({
				type: 'DEL_NOTE',
				payload: id
			})
		}
	})
)(Note);*/