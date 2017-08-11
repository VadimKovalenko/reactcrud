import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { saveNote } from './../actions/notesActions';

class NoteForm extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      color: ''
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

	addNote(e) {
		e.preventDefault();
    //Validation
    //let errors = {};
    //this.setState({ errors });
    let text = this.state.text;
    let color = this.state.color;
    this.props.saveNote({ text, color });
	}

  render() {
    return (
     	<div style={{textAlign: 'center'}}>
        <h1>Form</h1>
        <form onSubmit={this.addNote.bind(this)}>
          <label htmlFor="text">Type your text</label>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange.bind(this)}/>
          <br/> 
          <label htmlFor="color">Type your color</label>
        	<input type="text" name="color" value={this.state.color} onChange={this.handleChange.bind(this)}/>
          <br/>
        	<button>Add</button>
        </form>
      </div>);
  }
}

export default connect(null, { saveNote })(NoteForm);