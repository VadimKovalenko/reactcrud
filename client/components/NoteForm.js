import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import { connect } from 'react-redux';

import { saveNote } from './../actions/notesActions';

const COLORS = ['#c2d468', '#fcce54', '#42cb6f', '#cb93ee', '#4ec2e7', '#f97e52', '#48cfc1'];

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      color: COLORS[1]
    };
    this.addNote = this.addNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  setColor(value) {
    console.log(value)
    this.setState({
      color: value,
    })
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
     	<div className="form-wrapper" style={{textAlign: 'center'}}>
        <h1>Create ToDo</h1>
        <form onSubmit={this.addNote}>
          <label htmlFor="text">Type note text</label>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
          <br/> 
          <label htmlFor="color" className="color-label">Choose color</label>
          <br/>
          <div className="color-picker">
            {
              COLORS.map(color=>
                <div
                  value={this.state.color}
                  key={color}
                  className={cx('note_color', {note_active: this.state.color === color})}
                  style={{background: color}}
                  onClick={() => this.setColor(color)}
                />
              )
            }
          </div>
          <br/>
        	<button className = "add-note-btn">Create</button>
        </form>
      </div>);
  }
}

export default connect(null, { saveNote })(NoteForm);