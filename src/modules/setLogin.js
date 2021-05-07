const LOGIN_GOOGLE = 'setLogin/LOGIN_GOOGLE';
const LOGOUT_GOOGLE = 'setLogin/LOGOUT_GOOGLE';
const LOGIN_KAKAO = 'setLogin/LOGIN_KAKAO';
const LOGOUT_KAKAO = 'setLogin/LOGOUT_KAKAO';

export const loginGoogle = () => ({ type: LOGIN_GOOGLE });
export const logoutGoogle = () => ({ type: LOGOUT_GOOGLE });
export const loginKakao = () => ({ type: LOGIN_KAKAO });
export const logoutKakao = () => ({ type: LOGOUT_KAKAO });

export const loginGoogleAsync = () => dispatch => {
	dispatch(loginGoogle());
};
export const logoutGoogleAsync = () => dispatch => {
	dispatch(logoutGoogle());
};
export const loginKakaoAsync = () => dispatch => {
	dispatch(loginKakao());
};
export const logoutKakaoAsync = () => dispatch => {
	dispatch(logoutKakao());
};

export const initialState = {
	loginGoogle: 'false',
	loginKakao: 'false'
};

export default function setLoginReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN_GOOGLE:
			return {
				...state,
				loginGoogle: 'true'
			};
		case LOGOUT_GOOGLE:
			return {
				...state,
				loginGoogle: 'false'
			};
		case LOGIN_KAKAO:
			return {
				...state,
				loginKakao: 'true'
			};
		case LOGOUT_KAKAO:
			return {
				...state,
				loginKakao: 'false'
			};
		default:
			return state;
	}
}
