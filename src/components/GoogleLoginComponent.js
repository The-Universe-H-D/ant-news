import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

function GoogleLoginComponent() {
	const [loginState, setLoginState] = useState(false);
	const [userName, setUserName] = useState('');
	const responseGoogle = response => {
		console.log(response);
		setUserName(response.gt.Te);
		setLoginState(true);
	};
	const onLogoutSuccess = response => {
		console.log(response);
		setLoginState(false);
	};
	return (
		<div>
			{loginState ? (
				<>
					<b>{userName}님 환영합니다.</b>
					<GoogleLogout
						clientId="379175647400-vb7hlqes9vi20lach33v4o8quihmaauc.apps.googleusercontent.com"
						buttonText="Logout"
						onLogoutSuccess={onLogoutSuccess}
					/>
				</>
			) : (
				<GoogleLogin
					clientId="379175647400-vb7hlqes9vi20lach33v4o8quihmaauc.apps.googleusercontent.com"
					buttonText="GoogleLogin"
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					cookiePolicy={'single_host_origin'}
				/>
			)}
		</div>
	);
}

export default GoogleLoginComponent;
