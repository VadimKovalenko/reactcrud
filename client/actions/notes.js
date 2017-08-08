let mockApiData = [
	{
		id: 1,
		name: 'Note 1',
		color: '#9398ec'
	},
	{
		id: 2,
		name: 'Note 2',
		color: '#47cec0'
	},
	{
		id: 3,
		name: 'Note 3',
		color: '#ec87bf'
	},
	{
		id: 4,
		name: 'Note 4',
		color: '#42cb6f'
	},
];

export const getNotes = () => dispatch => {
     console.log('I got notes');
     dispatch({ type: 'FETCH_NOTES_SUCCESS', payload: mockApiData });
}