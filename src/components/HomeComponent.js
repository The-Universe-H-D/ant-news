import React from 'react';
import SearchInput from './SearchInput';
import '../assets/scss/HomeComponent.scss';
import Header from './Header';

function HomeComponent() {
	return (
		<div>
			<Header />
			<section className="home_section">
				<SearchInput />
			</section>
		</div>
	);
}

export default HomeComponent;
