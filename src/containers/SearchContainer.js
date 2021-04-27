import React from 'react';
import { useDispatch } from 'react-redux';
import SearchPage from '../components/SearchPage';
import { getApiAsync } from '../modules/getAPI';

function SearchContainer() {
	const dispatch = useDispatch();
	const onGetApi = (value, history) => {
		dispatch(getApiAsync(value, history));
	};
	return (
		<div>
			<SearchPage onGetApi={onGetApi} />
		</div>
	);
}

export default SearchContainer;
