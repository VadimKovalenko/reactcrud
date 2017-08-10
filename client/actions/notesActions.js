export const SET_NOTES = 'SET_NOTES'


export function setNotes(notes) {
	return {
		type: SET_NOTES,
		notes
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
			      .then( notes => dispatch(setNotes(notes)))
		    }  
		  )  
		  .catch(function(err) {  
		    console.log('Fetch Error :-S', err);  
		  });
} 