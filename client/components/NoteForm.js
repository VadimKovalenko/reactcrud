import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { saveNote } from './../actions/notesActions';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      color: ''
    }
    this.addNote = this.addNote.bind(this);
    this.handleChange = this.handleChange.bind(this); 
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

	addNote(e) {
		e.preventDefault();
    let text = this.state.text;
    let color = this.state.color;
    this.props.saveNote({ text, color });
    text, color = '';
	}

  render() {
    return (
     	<div style={{textAlign: 'center'}}>
        <h1>Form</h1>
        <form onSubmit={this.addNote}>
          <label htmlFor="text">Type your text</label>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
          <br/> 
          <label htmlFor="color">Type your color</label>
        	<input type="text" name="color" value={this.state.color} onChange={this.handleChange}/>
          <br/>
        	<button>Add</button>
        </form>
      </div>);
  }
}

export default connect(null, { saveNote })(NoteForm);