import React from 'react';
import logo from '../assets/img/logo.jpg';
import '../assets/scss/LogoImg.scss';
import { Link } from 'react-router-dom';

function LogoImg() {
	return (
		<div className="LogoImg">
			<Link to="/">
				<img alt="logo" src={logo} />
				<b>AntNEWS</b>
			</Link>
		</div>
	);
}

export default LogoImg;
