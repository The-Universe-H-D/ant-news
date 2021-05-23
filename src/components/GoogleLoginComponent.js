import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useSelector } from 'react-redux';

function GoogleLoginComponent({ onLoginGoogle, onLogoutGoogle }) {
	const { name } = useSelector(state => state.setLoginReducer.loginGoogle || state.setLoginReducer.loginKakao);
	const [loginState, setLoginState] = useState(false);
	const onLoginSuccess = res => {
		setLoginState(true);
		onLoginGoogle(res);
	};
	const onLoginFailure = res => {
		console.log(res);
	};
	const onLogoutSuccess = () => {
		setLoginState(false);
		onLogoutGoogle();
	};
	const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
	if (loginState)
		return (
			<div className="GoogleLoginComponent">
				<b className="user-name">{name}님 환영합니다.</b>
				<GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={onLogoutSuccess} />
			</div>
		);
	if (!loginState)
		return (
			<div className="GoogleLoginComponent">
				<span style={{ marginRight: '1rem' }}>로그인을 하시면 검색 기록이 저장됩니다.</span>
				<GoogleLogin
					clientId={clientId}
					buttonText="Login"
					onSuccess={onLoginSuccess}
					onFailure={onLoginFailure}
					cookiePolicy={'single_host_origin'}
				/>
			</div>
		);
}

export default GoogleLoginComponent;
