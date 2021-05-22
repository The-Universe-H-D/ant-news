import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

function GoogleLoginComponent({ onLoginGoogle, onLogoutGoogle }) {
	const userName = window.sessionStorage.getItem('userName') ? window.sessionStorage.getItem('userName') : '';
	const [loginState, setLoginState] = useState(userName ? true : false);
	const onLoginSuccess = res => {
		console.log(res);
		window.sessionStorage.setItem('userName', res.profileObj.name);
		setLoginState(true);
		onLoginGoogle();
	};
	const onLoginFailure = res => {
		console.log(res);
	};
	const onLogoutSuccess = res => {
		console.log(res);
		window.sessionStorage.clear();
		setLoginState(false);
		onLogoutGoogle();
	};
	const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
	if (loginState)
		return (
			<div className="GoogleLoginComponent">
				<b className="user-name">{userName}님 환영합니다.</b>
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
