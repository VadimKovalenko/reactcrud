import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { getNotes } from './../actions/notes';

class NoteForm extends Component {
	addNote(e) {
		e.preventDefault();
		//console.log("add note", this.noteText.value);
	}

  render() {
  	//console.log("add note", this.noteText.value);
  	console.log(this.props.notes);
    return (
     	<div style={{textAlign: 'center'}}>
        <h1>Form</h1>
        <form onSubmit={this.addNote.bind(this)}>
        	<input type="text" ref={(input) => {this.noteText = input}}/>
        	<button>Add</button>
        </form>
      </div>);
  }
}

/*export default connect(
	state => ({
		notes: state.notes
	}),
	dispatch => getNotes()
)(NoteForm);*/

//export default NoteForm;