export function fetchNotes() {
	return dispatch => {
		fetch('/notes');
	}
} 