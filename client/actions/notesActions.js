export const SET_NOTES = 'SET_NOTES';
export const ADD_NOTE = 'ADD_NOTE';
export const DEL_NOTE = 'DEL_NOTE';
export const UPDATED_NOTE = 'UPDATED_NOTE';


function handleResponse(response) {
	if(response.ok) {
		return response.json();
	} else {
		let error = new Error(response.statusText);
		error.response = response;
		throw error;
	}
}

export function setNotes(notes) {
	return {
		type: SET_NOTES,
		notes
	}
}

export function addNoteAction(note) {
	return {
		type: ADD_NOTE,
		note
	}
}

function deleteNoteAction(noteId) {
	return {
		type: DEL_NOTE,
		noteId
	}
}

function UpdatingNoteAction(note) {
	return {
		type: UPDATED_NOTE,
		note
	}
}

export function fetchNotes() {
	return dispatch => 
		fetch('/api/notes')
			.then(  
		    function(response) {  
		      if (response.status !== 200) {  
		        console.log('Looks like there was a problem. Status Code: ' +  response.status);  
		        return;  
		      }  
		      response.json()
			      .then( note => dispatch(setNotes(note)))
		    }  
		  )  
		  .catch(function(err) {  
		    console.log('Fetch Error :-S', err);  
		  });
}

export function saveNote(data) {
	return dispatch => {
			return fetch('/api/notes', {
				method: 'post',
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json"
				}
			}).then(handleResponse)
				.then(data => dispatch(addNoteAction(data)))
	}	
}

export function UpdatingNote(data) {
	return dispatch => {
			return fetch(`/api/notes/${data.id}/updating`, {
				method: 'put',
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json"
				}
			}).then(handleResponse)
				.then(data => dispatch(UpdatingNoteAction(data)))
	}
}


export function deleteNote(id) {
	return dispatch => {
		return fetch(`/api/notes/${id}`, {
			method: 'delete',
			headers: {
				"Content-Type": "application/json"
			}
		}).then(handleResponse)
			.then(() => dispatch(deleteNoteAction(id)))
	}
} 