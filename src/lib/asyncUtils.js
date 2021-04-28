import axios from 'axios';

export const createPromiseThunk = (type, promiseCreator) => {
	const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

	const thunkCreator = param => async dispatch => {
		try {
			dispatch({ type });
			const payload = await promiseCreator;
			dispatch({
				type: SUCCESS,
				payload: payload
			});
		} catch (error) {
			dispatch({
				type: ERROR,
				payload: error
			});
		}
	};

	return thunkCreator;
};

export const promiseCreator = async param => {
	return await axios(param);
};

export const handleAsyncActions = (type, key) => {
	const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

	function Reducer(state, action) {
		switch (action.type) {
			case type:
				return {
					...state[key],
					[key]: {
						loading: true,
						data: null,
						error: null
					}
				};
			case SUCCESS:
				return {
					...state[key],
					[key]: {
						loading: false,
						data: action.payload,
						error: null
					}
				};
			case ERROR:
				return {
					...state[key],
					[key]: {
						loading: false,
						data: null,
						error: action.payload
					}
				};
			default:
				return state;
		}
	}

	return Reducer;
};
