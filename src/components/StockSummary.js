import React from 'react';

function StockSummary() {
	return (
		<div>
			<ul>
				<li>
					<span>Previous Close</span>
					<b>{}</b>
				</li>
				<li>
					<span>Open</span>
					<b>{}</b>
				</li>
				<li>
					<span>Bid</span>
					<b>{}</b>
				</li>
				<li>
					<span>Ask</span>
					<b>{}</b>
				</li>
				<li>
					<span>Day's Range</span>
					<b>{}</b>
				</li>
				<li>
					<span>52 Week Range</span>
					<b>{}</b>
				</li>
				<li>
					<span>Volume</span>
					<b>{}</b>
				</li>
				<li>
					<span>Avg. Volume</span>
					<b>{}</b>
				</li>
			</ul>
			<ul>
				<li>
					<span>Market Cap</span>
					<b>{}</b>
				</li>
				<li>
					<span>Beta (5Y Monthly)</span>
					<b>{}</b>
				</li>
				<li>
					<span>PE Ratio (TTM)</span>
					<b>{}</b>
				</li>
				<li>
					<span>EPS (TTM)</span>
					<b>{}</b>
				</li>
				<li>
					<span>Earnings Data</span>
					<b>{}</b>
				</li>
				<li>
					<span>Forward Dividend &#38; Yield</span>
					<b>{}</b>
				</li>
				<li>
					<span>Ex-Dividend Date</span>
					<b>{}</b>
				</li>
				<li>
					<span>1y Target Est</span>
					<b>{}</b>
				</li>
			</ul>
		</div>
	);
}

export default StockSummary;
