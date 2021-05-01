import React from 'react';
import '../assets/scss/AutoComplete.scss';

function AutoComplete({ items, onlistClick }) {
	return (
		<div className="AutoComplete" style={items.length === 0 ? { display: 'none' } : { display: 'block' }}>
			<ul className="items">
				{items.map(item => (
					<li className="item" key={item.symbol} onClick={() => onlistClick(item.longname, item.symbol)}>
						{item.longname} - {item.exchange}
					</li>
				))}
			</ul>
		</div>
	);
}

export default AutoComplete;
