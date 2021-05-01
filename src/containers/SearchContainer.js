import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchInput from '../components/SearchInput';
import SearchPage from '../components/SearchPage';
import { getNewsDetail, getNewsList, getStockChart, getStockSummary } from '../modules/getAPI';
import initialState from '../modules/getAPI';

function SearchContainer() {
	const { newsList, stockChart, stockSummary } = useSelector(state => state.getApiReducer || initialState);

	const dispatch = useDispatch();
	const onGetApi = (value, range) => {
		let interval = '1d';
		if (range === '1d' || range === '5d') {
			interval = '15m';
		}
		dispatch(getStockChart(value, range, interval));
		dispatch(getStockSummary(value));
		dispatch(getNewsList(value));
	};
	const onGetStockChart = (value, range) => {
		let interval = '1d';
		if (range === '1d' || range === '5d') {
			interval = '15m';
		}
		if (!newsList.data && !stockChart.data && !stockSummary.data) {
			dispatch(getStockChart(value, range, interval));
			dispatch(getStockSummary(value));
			dispatch(getNewsList(value));
		}
		dispatch(getStockChart(value, range, interval));
	};
	const onGetNewsDetail = async id => {
		dispatch(getNewsDetail(id));
	};
	const currency = stockChart.data ? stockChart.data.data.currency : [];
	const dateTime = stockChart.data ? stockChart.data.data.datetime : [];
	const low = stockChart.data ? stockChart.data.data.low : [];
	const high = stockChart.data ? stockChart.data.data.high : [];
	const summaryData = stockSummary.data ? stockSummary.data.data : [];

	if (newsList.loading || stockChart.loading || stockSummary.loading)
		return <div style={{ display: 'flex', marginTop: '15%', justifyContent: 'center' }}>로딩중...</div>;
	if (!newsList.data && !stockChart.data && !stockSummary.data)
		return (
			<div style={{ display: 'flex', marginTop: '15%', justifyContent: 'center' }}>
				<SearchInput onGetApi={onGetApi} onGetStockChart={onGetStockChart} />
			</div>
		);
	return (
		<div style={{ marginTop: '100px' }}>
			<SearchPage
				onGetApi={onGetApi}
				onGetNewsDetail={onGetNewsDetail}
				onGetStockChart={onGetStockChart}
				dateTime={dateTime}
				low={low}
				high={high}
				summaryData={summaryData}
				currency={currency}
			/>
		</div>
	);
}

export default SearchContainer;
