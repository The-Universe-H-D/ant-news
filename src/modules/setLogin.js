import axios from 'axios';

const LOGIN_GOOGLE = 'setLogin/LOGIN_GOOGLE';
const LOGOUT_GOOGLE = 'setLogin/LOGOUT_GOOGLE';
const LOGIN_KAKAO = 'setLogin/LOGIN_KAKAO';
const LOGOUT_KAKAO = 'setLogin/LOGOUT_KAKAO';

export const loginGoogle = (id, name, email) => ({ type: LOGIN_GOOGLE, id, name, email });
export const logoutGoogle = () => ({ type: LOGOUT_GOOGLE });
export const loginKakao = () => ({ type: LOGIN_KAKAO });
export const logoutKakao = () => ({ type: LOGOUT_KAKAO });

export const loginGoogleAsync = res => async dispatch => {
	const { googleId, name, email } = res.profileObj;
	dispatch(loginGoogle(googleId, name, email));
	try {
		const config = {
			headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` }
		};
		const payload = await axios.post(
			`${process.env.REACT_APP_API_DOMAIN}/User/sign/in`,
			{
				id: googleId,
				name,
				email
			},
			config
		);
		console.log(payload.data);
	} catch (e) {}
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
	loginGoogle: {
		state: 'false',
		id: '',
		name: '',
		email: ''
	},
	loginKakao: {
		state: 'false',
		id: '',
		name: '',
		email: ''
	}
};

export default function setLoginReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN_GOOGLE:
			return {
				...state,
				loginGoogle: {
					state: 'true',
					id: action.id,
					name: action.name,
					email: action.email
				}
			};
		case LOGOUT_GOOGLE:
			return {
				...state,
				loginGoogle: {
					state: 'false',
					id: '',
					name: '',
					email: ''
				}
			};
		case LOGIN_KAKAO:
			return {
				...state,
				loginKakao: {
					state: 'true'
				}
			};
		case LOGOUT_KAKAO:
			return {
				...state,
				loginKakao: {
					state: 'false'
				}
			};
		default:
			return state;
	}
}
