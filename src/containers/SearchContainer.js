import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchInput from '../components/SearchInput';
import SearchPage from '../components/SearchPage';
import { getNewsList, getStockChart, getStockSummary } from '../modules/getAPI';
import initialState from '../modules/getAPI';

function SearchContainer() {
	const { stock, news } = useSelector(state => state.getApiReducer || initialState);
	const newsList = news.data ? news.data.data.newsList : [];
	const dispatch = useDispatch();
	const onGetApi = value => {
		dispatch(getNewsList(value));
		//dispatch(getStockChart(value));
		//dispatch(getStockSummary(value));
	};

	useEffect(() => {}, []);

	if (news.loading || stock.loading)
		return <div style={{ display: 'flex', marginTop: '15%', justifyContent: 'center' }}>로딩중...</div>;
	if (!stock.data && !news.data)
		return (
			<div style={{ display: 'flex', marginTop: '15%', justifyContent: 'center' }}>
				<SearchInput onGetApi={onGetApi} />
			</div>
		);
	return (
		<div>
			<SearchPage onGetApi={onGetApi} newsList={newsList} />
		</div>
	);
}

export default SearchContainer;
