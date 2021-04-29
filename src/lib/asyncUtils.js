import axios from 'axios';

export const createPromiseThunk = (type, param, history) => {
	const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

	const thunkCreator = async dispatch => {
		try {
			dispatch({ type });
			const payload = await axios(param);
			dispatch({
				type: SUCCESS,
				payload: payload
			});
			if (SUCCESS === 'getAPI/GET_STOCK_CHART_SUCCESS') {
				const { high, low } = payload.data;
				const average = [];
				const getAverage = () => {
					for (let i = 0; i < high.length; i++) {
						const result = (high[i] + low[i]) * 0.5;
						average.push(result);
					}
					const averageFilter = average.filter(ele => ele !== 0);
					payload.data.average = averageFilter;
				};
				getAverage();
			}
			if (SUCCESS === 'getAPI/GET_NEWS_DETAIL_SUCCESS') {
				const { url } = payload.data;
				window.open(url);
			}
		} catch (error) {
			dispatch({
				type: ERROR,
				payload: error
			});
		}
	};

	return thunkCreator;
};

export const handleAsyncActions = (type, key) => {
	const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

	function Reducer(state, action) {
		switch (action.type) {
			case type:
				return {
					...state,
					[key]: {
						loading: true,
						data: null,
						error: null
					}
				};
			case SUCCESS:
				return {
					...state,
					[key]: {
						loading: false,
						data: action.payload,
						error: null
					}
				};
			case ERROR:
				return {
					...state,
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
