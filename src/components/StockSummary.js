import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/scss/StockSummary.scss';
import { initialState } from '../modules/getAPI';

function StockSummary({ summaryData }) {
	const { stockChart } = useSelector(state => state.getApiReducer || initialState);
	const symbol = stockChart.data ? stockChart.data.data.symbol : [];
	const {
		previousClose,
		open,
		bid,
		ask,
		dayRange,
		yearRange,
		volume,
		averageVolume,
		marketCapitalization,
		beta5YMonthly,
		priceEarningsRatio,
		earningPerShare,
		forwardDividendAndYield,
		exdividendDate,
		yearTargetEstimate,
		earningDate,
		name,
		website
	} = summaryData;
	return (
		<>
			<div className="stock-name">
				<b className="name">{name}</b>
				<span className="symbol">{symbol}</span>
				<span className="website">
					<a href={website}>{website}</a>
				</span>
			</div>
			<div className="StockSummary">
				<ul className="sum-1">
					<li>
						<span>Previous Close</span>
						<b>{previousClose || 'N/A'}</b>
					</li>
					<li>
						<span>Open</span>
						<b>{open || 'N/A'}</b>
					</li>
					<li>
						<span>Bid</span>
						<b>{bid || 'N/A'}</b>
					</li>
					<li>
						<span>Ask</span>
						<b>{ask || 'N/A'}</b>
					</li>
					<li>
						<span>Day's Range</span>
						<b>{dayRange || 'N/A'}</b>
					</li>
					<li>
						<span>52 Week Range</span>
						<b>{yearRange || 'N/A'}</b>
					</li>
					<li>
						<span>Volume</span>
						<b>{volume || 'N/A'}</b>
					</li>
					<li>
						<span>Avg. Volume</span>
						<b>{averageVolume || 'N/A'}</b>
					</li>
				</ul>
				<ul className="sum-2">
					<li>
						<span>Market Cap</span>
						<b>{marketCapitalization || 'N/A'}</b>
					</li>
					<li>
						<span>Beta (5Y Monthly)</span>
						<b>{beta5YMonthly || 'N/A'}</b>
					</li>
					<li>
						<span>PE Ratio (TTM)</span>
						<b>{priceEarningsRatio || 'N/A'}</b>
					</li>
					<li>
						<span>EPS (TTM)</span>
						<b>{earningPerShare || 'N/A'}</b>
					</li>
					<li>
						<span>Earnings Date</span>
						<b>{earningDate || 'N/A'}</b>
					</li>
					<li>
						<span>Forward Dividend &#38; Yield</span>
						<b>{forwardDividendAndYield || 'N/A'}</b>
					</li>
					<li>
						<span>Ex-Dividend Date</span>
						<b>{exdividendDate || 'N/A'}</b>
					</li>
					<li>
						<span>1y Target Est</span>
						<b>{yearTargetEstimate || 'N/A'}</b>
					</li>
				</ul>
			</div>
		</>
	);
}

export default StockSummary;
