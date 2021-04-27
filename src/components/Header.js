import React from 'react';
import GoogleLoginComponent from './GoogleLoginComponent';
import '../assets/scss/Header.scss';
import LogoImg from './LogoImg';

function Header() {
	return (
		<div>
			<header>
				<LogoImg />
				<GoogleLoginComponent />
			</header>
		</div>
	);
}

export default Header;
