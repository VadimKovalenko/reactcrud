export const SET_NOTES = 'SET_NOTES';
export const ADD_NOTE = 'ADD_NOTE';


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

export function addNote(note) {
	console.log('Note from action function ', note)
	return {
		type: ADD_NOTE,
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
				.then(data => dispatch(addNote(data)))
				.then(console.log("Data from last promise ", data))
	}	
} 