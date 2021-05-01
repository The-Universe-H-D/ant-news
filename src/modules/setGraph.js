const SET_X_AXIS = 'setGraph/SET_X_AXIS';

export const setXAxis = value => ({ type: SET_X_AXIS, value });

export const setXAxisAsync = value => dispatch => {
	dispatch(setXAxis(value));
};

export const initialState = {
	XAxisDate: 'true'
};

export default function setGraphReducer(state = initialState, action) {
	switch (action.type) {
		case SET_X_AXIS:
			return {
				...state,
				XAxisDate: action.value
			};
		default:
			return state;
	}
}
