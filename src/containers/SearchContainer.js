import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchInput from '../components/SearchInput';
import SearchPage from '../components/SearchPage';
import { getNewsList, getStockChart, getStockSummary } from '../modules/getAPI';
import initialState from '../modules/getAPI';

function SearchContainer() {
	const { newsList, newsDetail, stockChart, stockSummary } = useSelector(
		state => state.getApiReducer || initialState
	);
	const newsListData = newsList.data ? newsList.data.data.newsList : [];
	const dispatch = useDispatch();
	const onGetApi = value => {
		console.log('value', value);
		dispatch(getNewsList(value));
		dispatch(getStockChart(value));
		dispatch(getStockSummary(value));
	};

	useEffect(() => {}, []);

	if (newsList.loading || newsDetail.loading || stockChart.loading || stockSummary.loading)
		return <div style={{ display: 'flex', marginTop: '15%', justifyContent: 'center' }}>로딩중...</div>;
	if (!newsList.data && !newsDetail.data && !stockChart.data && !stockSummary.data)
		return (
			<div style={{ display: 'flex', marginTop: '15%', justifyContent: 'center' }}>
				<SearchInput onGetApi={onGetApi} />
			</div>
		);
	return (
		<div>
			<SearchPage onGetApi={onGetApi} newsList={newsListData} />
		</div>
	);
}

export default SearchContainer;
