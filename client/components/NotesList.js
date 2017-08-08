import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { fetchNotes } from './../actions/notesActions';

//function NotesList({ Mnotes }) {

class NotesList extends React.Component	{

	componentDidMount() {
		//this.props.fetchNotes();
		fetch('/api/notes')
			.then(  
		    function(response) {  
		      if (response.status !== 200) {  
		        console.log('Looks like there was a problem. Status Code: ' +  response.status);  
		        return;  
		      }
		      // Examine the text in the response  
		      response.json().then(function(data) {  
		        console.log(data);  
		      });  
		    }  
		  )  
		  .catch(function(err) {  
		    console.log('Fetch Error :-S', err);  
		  });
	}

	render(){
	return (
		<div>
			{this.props.notes}
		</div>
	);
 }
}

function mapStateToProps(state) {
	return {
		notes: "Vadim"
	}
}

/*export default function NotesList({ notes })	{
	const emptyMessage = (
		<p>There are no notes yet in the collection</p>
	);

	const notesList = (
		<p>Notes List</p>
	);

	return (
		<div>
			{notes.length === 0 ? emptyMessage : notesList}
		</div>
	);
}*/

export default connect(mapStateToProps, {fetchNotes})(NotesList);