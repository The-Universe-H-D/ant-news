import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

function GoogleLoginComponent() {
	const userName = window.sessionStorage.getItem('userName') ? window.sessionStorage.getItem('userName') : '';
	const [loginState, setLoginState] = useState(userName ? true : false);
	const onLoginSuccess = res => {
		console.log(res);
		window.sessionStorage.setItem('userName', res.gt.Te);
		setLoginState(true);
	};
	const onLoginFailure = res => {
		console.log(res);
	};
	const onLogoutSuccess = res => {
		console.log(res);
		window.sessionStorage.clear();
		setLoginState(false);
	};
	if (loginState)
		return (
			<div className="GoogleLoginComponent">
				<b className="user-name">{userName}님 환영합니다.</b>
				<GoogleLogout
					clientId="379175647400-vb7hlqes9vi20lach33v4o8quihmaauc.apps.googleusercontent.com"
					buttonText="Logout"
					onLogoutSuccess={onLogoutSuccess}
				/>
			</div>
		);
	if (!loginState)
		return (
			<div className="GoogleLoginComponent">
				<span style={{ marginRight: '1rem' }}>로그인을 하시면 검색결과가 저장됩니다.</span>
				<GoogleLogin
					clientId="379175647400-vb7hlqes9vi20lach33v4o8quihmaauc.apps.googleusercontent.com"
					buttonText="Google Login"
					onSuccess={onLoginSuccess}
					onFailure={onLoginFailure}
					cookiePolicy={'single_host_origin'}
				/>
			</div>
		);
}

export default GoogleLoginComponent;
