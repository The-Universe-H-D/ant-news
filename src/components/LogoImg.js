import React from 'react';
import logo from '../assets/img/logo.jpg';
import '../assets/scss/LogoImg.scss';

function LogoImg() {
	return (
		<div className="LogoImg">
			<img alt="logo" src={logo} />
			<b>AntNEWS</b>
		</div>
	);
}

export default LogoImg;
