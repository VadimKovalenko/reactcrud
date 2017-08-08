const initialState = [];

//Функция редусер для работы с заметками
export default function notes(state = initialState, action) {
	console.log(action);
	if (action.type === 'ADD_NOTE') {
		//Используем спреад оператор чтобы изменить объект state
		return [
			...state,
			action.payload
		];
	} else if (action.type === 'FETCH_NOTES_SUCCESS') {
		return action.payload;
	}
	return state;
}