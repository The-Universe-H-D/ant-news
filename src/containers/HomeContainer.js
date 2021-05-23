import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeComponent from '../components/HomeComponent';
import { loginGoogleAsync, loginKakaoAsync, logoutGoogleAsync, logoutKakaoAsync } from '../modules/setLogin';

function HomeContainer() {
	const { loginGoogle, loginKakao } = useSelector(state => state.setLoginReducer);
	const dispatch = useDispatch();
	const onLoginGoogle = res => {
		dispatch(loginGoogleAsync(res));
	};
	const onLogoutGoogle = () => {
		dispatch(logoutGoogleAsync());
	};
	const onLoginKakao = () => {
		dispatch(loginKakaoAsync());
	};
	const onLogoutKakao = () => {
		dispatch(logoutKakaoAsync());
	};
	return (
		<div>
			<HomeComponent
				loginGoogle={loginGoogle}
				loginKakao={loginKakao}
				onLoginGoogle={onLoginGoogle}
				onLogoutGoogle={onLogoutGoogle}
				onLoginKakao={onLoginKakao}
				onLogoutKakao={onLogoutKakao}
			/>
		</div>
	);
}

export default HomeContainer;
