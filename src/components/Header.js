import React from 'react';
import GoogleLoginComponent from './GoogleLoginComponent';
import '../assets/scss/Header.scss';
import LogoImg from './LogoImg';
import KakaoLoginComponent from './KakaoLoginComponent';

function Header({ loginGoogle, loginKakao, onLoginGoogle, onLogoutGoogle, onLoginKakao, onLogoutKakao }) {
	return (
		<div>
			<header>
				<LogoImg />
				{loginKakao.state === 'true' || (
					<GoogleLoginComponent onLoginGoogle={onLoginGoogle} onLogoutGoogle={onLogoutGoogle} />
				)}
				{loginGoogle.state === 'true' || (
					<KakaoLoginComponent onLoginKakao={onLoginKakao} onLogoutKakao={onLogoutKakao} />
				)}
			</header>
		</div>
	);
}

export default Header;
