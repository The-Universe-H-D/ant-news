import React from 'react';
import googleLogo from '../assets/img/google.png';

function GoogleLogin() {
	return (
		<div>
			<button>
				<img alt="google logo" src={googleLogo} />
				<span>구글 로그인</span>
			</button>
		</div>
	);
}

export default GoogleLogin;
