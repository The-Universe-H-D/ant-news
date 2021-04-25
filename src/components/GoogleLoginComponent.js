import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

function GoogleLoginComponent() {
	const [loginState, setLoginState] = useState(false);
	const userName = loginState ? window.sessionStorage.getItem('userName') : '';
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
			<>
				<b>{userName}님 환영합니다.</b>
				<GoogleLogout
					clientId="379175647400-vb7hlqes9vi20lach33v4o8quihmaauc.apps.googleusercontent.com"
					buttonText="Logout"
					onLogoutSuccess={onLogoutSuccess}
				/>
			</>
		);
	if (!loginState)
		return (
			<GoogleLogin
				clientId="379175647400-vb7hlqes9vi20lach33v4o8quihmaauc.apps.googleusercontent.com"
				buttonText="Google Login"
				onSuccess={onLoginSuccess}
				onFailure={onLoginFailure}
				cookiePolicy={'single_host_origin'}
			/>
		);
}

export default GoogleLoginComponent;
