import { SET_NOTES } from './../actions/notesActions';

export default function notes(state = [], action = {}) {
	switch(action.type) {
		case SET_NOTES:
			return action.notes;
		default: return state;
	}
}