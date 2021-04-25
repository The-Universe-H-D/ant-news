import React from 'react';
import '../assets/scss/HomeComponent.scss';
import LogoImg from './LogoImg';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
import GoogleLoginComponent from './GoogleLoginComponent';

function HomeComponent() {
	return (
		<div>
			<header>
				<GoogleLoginComponent />
			</header>
			<section className="home_section">
				<LogoImg />
				<SearchInput />
			</section>
		</div>
	);
}

export default HomeComponent;
