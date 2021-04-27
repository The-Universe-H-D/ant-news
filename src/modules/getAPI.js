import axios from 'axios';

const GET_API = 'getAPI/GET_API';
const GET_API_SUCCESS = 'getAPI/GET_API_SUCCESS';
const GET_API_ERROR = 'getAPI/GET_API_ERROR';

export const getApi = () => ({ type: GET_API });
export const getApiSuccess = data => ({ type: GET_API_SUCCESS, data });
export const getApiError = e => ({ type: GET_API_ERROR, e });

export const getApiAsync = (value, history) => async (dispatch, getState) => {
	try {
		dispatch(getApi());
		const data = await axios(`/News/list?symbol=${value}&count=10`);
		dispatch(getApiSuccess(data));
		history.push('/search');
	} catch (e) {
		dispatch(getApiError(e));
	}
};

const initialState = {
	loading: false,
	data: [],
	error: null
};
export default function getApiReducer(state = initialState, action) {
	switch (action.type) {
		case GET_API:
			return {
				...state,
				loading: true
			};
		case GET_API_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.data
			};
		case GET_API_ERROR:
			return {
				...state,
				loading: false,
				error: action.e
			};
		default:
			return state;
	}
}
