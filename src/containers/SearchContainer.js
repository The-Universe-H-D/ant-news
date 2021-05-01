import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchInput from '../components/SearchInput';
import SearchPage from '../components/SearchPage';
import { getNewsDetail, getNewsList, getStockChart, getStockSummary } from '../modules/getAPI';
import initialState from '../modules/getAPI';
import { setXAxisAsync } from '../modules/setGraph';

function SearchContainer() {
	const { newsList, stockChart, stockSummary } = useSelector(state => state.getApiReducer || initialState);
	const { XAxisDate } = useSelector(state => state.setGraphReducer);
	const low = stockChart.data ? stockChart.data.data.low : [];
	const high = stockChart.data ? stockChart.data.data.high : [];
	const currency = stockChart.data ? stockChart.data.data.currency : [];
	const dateTime = stockChart.data ? stockChart.data.data.datetime : [];
	const summaryData = stockSummary.data ? stockSummary.data.data : [];

	const dispatch = useDispatch();
	const onGetApi = (value, range) => {
		let interval = '1d';
		if (range === '1d' || range === '5d') {
			interval = '15m';
		}
		dispatch(getStockSummary(value));
		dispatch(getNewsList(value));
		dispatch(getStockChart(value, range, interval));
	};
	const onGetNewsDetail = id => {
		dispatch(getNewsDetail(id));
	};
	const onSetXAxis = value => {
		dispatch(setXAxisAsync(value));
	};

	if (newsList.loading || stockChart.loading || stockSummary.loading)
		return <div style={{ display: 'flex', marginTop: '15%', justifyContent: 'center' }}>로딩중...</div>;
	if (!newsList.data && !stockChart.data && !stockSummary.data)
		return (
			<div style={{ display: 'flex', marginTop: '15%', justifyContent: 'center' }}>
				<SearchInput onGetApi={onGetApi} onSetXAxis={onSetXAxis} />
			</div>
		);

	return (
		<div style={{ marginTop: '100px' }}>
			<SearchPage
				onGetApi={onGetApi}
				onGetNewsDetail={onGetNewsDetail}
				onSetXAxis={onSetXAxis}
				dateTime={dateTime}
				summaryData={summaryData}
				currency={currency}
				low={low}
				high={high}
				XAxisDate={XAxisDate}
			/>
		</div>
	);
}
export default SearchContainer;
