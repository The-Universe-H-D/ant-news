import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchInput from '../components/SearchInput';
import SearchPage from '../components/SearchPage';
import { getApiAsync } from '../modules/getAPI';
import initialState from '../modules/getAPI';

function SearchContainer() {
	const { data, loading } = useSelector(state => state.getApiReducer || initialState);
	const newsList = data ? data.data.newsList : [];
	const dispatch = useDispatch();
	const onGetApi = (value, history) => {
		dispatch(getApiAsync(value, history));
	};

	useEffect(() => {}, [data, loading]);

	if (loading) return <div style={{ display: 'flex', marginTop: '15%', justifyContent: 'center' }}>로딩중...</div>;
	if (!data)
		return (
			<div style={{ display: 'flex', marginTop: '15%', justifyContent: 'center' }}>
				<SearchInput onGetApi={onGetApi} />
			</div>
		);
	if (newsList === []) return <div>검색 결과가 없습니다.</div>;
	return (
		<div>
			<SearchPage onGetApi={onGetApi} newsList={newsList} />
		</div>
	);
}

export default SearchContainer;
