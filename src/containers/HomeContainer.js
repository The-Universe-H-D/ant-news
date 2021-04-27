import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeComponent from '../components/HomeComponent';
import { getApiAsync } from '../modules/getAPI';

function HomeContainer() {
	const dispatch = useDispatch();
	const onGetApi = e => {
		e.preventDefault();
		dispatch(getApiAsync());
	};
	return (
		<div>
			<HomeComponent onGetApi={onGetApi} />
		</div>
	);
}

export default HomeContainer;
