import React from 'react';
import SearchInput from './SearchInput';
import '../assets/scss/HomeComponent.scss';
import Header from './Header';

function HomeComponent({ onGetApi }) {
	return (
		<div>
			<Header />
			<section className="home_section">
				<SearchInput onGetApi={onGetApi} />
			</section>
		</div>
	);
}

export default HomeComponent;
