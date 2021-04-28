import { createPromiseThunk, handleAsyncActions } from '../lib/asyncUtils';

const GET_NEWS_LIST = 'getAPI/GET_NEWS_LIST';
const GET_NEWS_LIST_SUCCESS = 'getAPI/GET_NEWS_LIST_SUCCESS';
const GET_NEWS_LIST_ERROR = 'getAPI/GET_NEWS_LIST_ERROR';
const GET_NEWS_DETAIL = 'getAPI/GET_NEWS_DETAIL';
const GET_NEWS_DETAIL_SUCCESS = 'getAPI/GET_NEWS_DETAIL_SUCCESS';
const GET_NEWS_DETAIL_ERROR = 'getAPI/GET_NEWS_DETAIL_ERROR';

const GET_STOCK_CHART = 'getAPI/GET_STOCK_CHART';
const GET_STOCK_CHART_SUCCESS = 'getAPI/GET_STOCK_CHART_SUCCESS';
const GET_STOCK_CHART_ERROR = 'getAPI/GET_STOCK_CHART_ERROR';
const GET_STOCK_SUMMARY = 'getAPI/GET_STOCK_SUMMARY';
const GET_STOCK_SUMMARY_SUCCESS = 'getAPI/GET_STOCK_SUMMARY_SUCCESS';
const GET_STOCK_SUMMARY_ERROR = 'getAPI/GET_STOCK_SUMMARY_ERROR';

export const getNewsList = value => createPromiseThunk(GET_NEWS_LIST, `/News/list?symbol=${value}&count=10`);
export const getNewsDetail = value => createPromiseThunk(GET_NEWS_DETAIL, `/News/detail?id=${value}`);
export const getStockChart = value =>
	createPromiseThunk(GET_STOCK_CHART, `/Stock/chart?symbol=${value}&range=1d&interval=5m`);
export const getStockSummary = value => createPromiseThunk(GET_STOCK_SUMMARY, `/Stock/summary?symbol=${value}`);

export const initialState = {
	newsList: {
		loading: false,
		data: null,
		error: null
	},
	newsDetail: {
		loading: false,
		data: null,
		error: null
	},
	stockChart: {
		loading: false,
		data: null,
		error: null
	},
	stockSummary: {
		loading: false,
		data: null,
		error: null
	}
};

const getNewsListReducer = handleAsyncActions(GET_NEWS_LIST, 'newsList');
const getNewsDetailReducer = handleAsyncActions(GET_NEWS_DETAIL, 'newsDetail');
const getStockChartReducer = handleAsyncActions(GET_STOCK_CHART, 'stockChart');
const getStockSummaryReducer = handleAsyncActions(GET_STOCK_SUMMARY, 'stockSummary');

export default function getApiReducer(state = initialState, action) {
	switch (action.type) {
		case GET_NEWS_LIST:
		case GET_NEWS_LIST_SUCCESS:
		case GET_NEWS_LIST_ERROR:
			return getNewsListReducer(state, action);
		case GET_NEWS_DETAIL:
		case GET_NEWS_DETAIL_SUCCESS:
		case GET_NEWS_DETAIL_ERROR:
			return getNewsDetailReducer(state, action);
		case GET_STOCK_CHART:
		case GET_STOCK_CHART_SUCCESS:
		case GET_STOCK_CHART_ERROR:
			return getStockChartReducer(state, action);
		case GET_STOCK_SUMMARY:
		case GET_STOCK_SUMMARY_SUCCESS:
		case GET_STOCK_SUMMARY_ERROR:
			return getStockSummaryReducer(state, action);
		default:
			return state;
	}
}
