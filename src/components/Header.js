import React from 'react';
import GoogleLoginComponent from './GoogleLoginComponent';
import '../assets/scss/Header.scss';
import LogoImg from './LogoImg';
import KakaoLoginComponent from './KakaoLoginComponent';

function Header() {
	return (
		<div>
			<header>
				<LogoImg />
				<GoogleLoginComponent />
				<KakaoLoginComponent />
			</header>
		</div>
	);
}

export default Header;
