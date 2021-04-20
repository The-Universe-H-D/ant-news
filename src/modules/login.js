const USER_LOGIN = 'login/USER_LOGIN';
const USER_LOGOUT = 'login/USER_LOGOUT';

export const userLogin = () => ({ type: USER_LOGIN });
export const userLogout = () => ({ type: USER_LOGOUT });

export const userLoginThunk = () => (dispatch, getState) => {
	dispatch(userLogin());
};
export const userLogoutThunk = () => (dispatch, getState) => {
	dispatch(userLogout());
};

const initialState = { login: false };

export default function login(state = initialState, action) {
	switch (action.type) {
		case USER_LOGIN:
			return {
				...state,
				login: true
			};
		case USER_LOGOUT:
			return {
				...state,
				login: false
			};
		default:
			return state;
	}
}
