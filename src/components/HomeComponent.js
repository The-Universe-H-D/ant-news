import React from 'react';
import '../assets/scss/HomeComponent.scss';
import Header from './Header';

function HomeComponent({ loginGoogle, loginKakao, onLoginGoogle, onLogoutGoogle, onLoginKakao, onLogoutKakao }) {
	return (
		<div>
			<Header
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

export default HomeComponent;
