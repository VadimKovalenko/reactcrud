import { SET_NOTES, ADD_NOTE } from './../actions/notesActions';

export default function notes(state = [], action = {}) {
	switch(action.type) {
		case ADD_NOTE:
			return [
			...state,
			action.note
			];	
		case SET_NOTES:
			return action.notes;
		default: return state;
	}
}