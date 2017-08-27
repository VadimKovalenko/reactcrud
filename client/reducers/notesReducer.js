import { SET_NOTES, ADD_NOTE, DEL_NOTE, UPDATED_NOTE } from './../actions/notesActions';

export default function notes(state = [], action = {}) {
	switch(action.type) {
		case ADD_NOTE:
			return [
			...state,
			action.note
			];	
		case SET_NOTES:
			return action.notes;
		case DEL_NOTE:
			return state.filter(item => item._id !== action.noteId)
		case UPDATED_NOTE:
			return state.map(item => {
				if(item._id === action.note._id) return action.note;
				return item	
			})	
		default: return state;
	}
}