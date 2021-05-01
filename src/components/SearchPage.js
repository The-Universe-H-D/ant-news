import React from 'react';
import SearchInput from './SearchInput';
import '../assets/scss/SearchPage.scss';
import NewsList from './NewsList';
import Graph from './Graph';
import StockSummary from './StockSummary';

function SearchPage({ onGetApi, dateTime, low, high, summaryData, currency, onGetNewsDetail }) {
	return (
		<div className="SearchPage">
			<div className="container">
				<nav className="nav">
					<b className="nav-title">종목</b>
					<ul className="nav-list">
						<li>삼성전자</li>
						<li>테슬라</li>
						<li>카카오</li>
					</ul>
				</nav>
				<section className="sec">
					<div className="sec-search">
						<SearchInput onGetApi={onGetApi} />
					</div>
					<div className="sec-contents">
						<Graph dateTime={dateTime} low={low} high={high} currency={currency} />
						<StockSummary summaryData={summaryData} />
						<NewsList onGetNewsDetail={onGetNewsDetail} />
					</div>
				</section>
			</div>
		</div>
	);
}

export default SearchPage;
