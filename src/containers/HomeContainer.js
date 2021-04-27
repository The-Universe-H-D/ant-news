import React from 'react';
import { useDispatch } from 'react-redux';
import HomeComponent from '../components/HomeComponent';
import { getApiAsync } from '../modules/getAPI';

function HomeContainer() {
	const dispatch = useDispatch();
	const onGetApi = (value, history) => {
		dispatch(getApiAsync(value, history));
	};
	return (
		<div>
			<HomeComponent onGetApi={onGetApi} />
		</div>
	);
}

export default HomeContainer;
