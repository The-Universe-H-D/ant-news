import axios from 'axios';
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

const GET_SEARCH_HISTORY = 'getAPI/GET_SEARCH_HISTORY';

export const getSearchHistory = () => ({ type: GET_SEARCH_HISTORY });
export const getSearchHistoryAsync = async (id, value) => {
	try {
		const token = process.env.REACT_APP_API_KEY;
		const config = {
			headers: { Authorization: `Bearer ${token}` }
		};
		const payload = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/History/add/${id}/${value}`, config);
		console.log(payload);
	} catch (e) {
		console.log(e);
	}
};

export const getNewsList = value =>
	createPromiseThunk(GET_NEWS_LIST, `${process.env.REACT_APP_API_DOMAIN}/News/list?symbol=${value}&count=10`);
export const getNewsDetail = id =>
	createPromiseThunk(GET_NEWS_DETAIL, `${process.env.REACT_APP_API_DOMAIN}/News/detail?id=${id}`);
export const getStockChart = (value, range, interval) =>
	createPromiseThunk(
		GET_STOCK_CHART,
		`${process.env.REACT_APP_API_DOMAIN}/Stock/chart?symbol=${value}&range=${range}&interval=${interval}`
	);
export const getStockSummary = value =>
	createPromiseThunk(GET_STOCK_SUMMARY, `${process.env.REACT_APP_API_DOMAIN}/Stock/summary?symbol=${value}`);

export const initialState = {
	hasResult: false,
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
