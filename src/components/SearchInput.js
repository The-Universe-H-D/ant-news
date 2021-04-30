import React, { useState } from 'react';
import '../assets/scss/SearchInput.scss';

function SearchInput({ onGetApi }) {
	const [input, setInput] = useState('');
	const [range, setRange] = useState('1d');
	const onChangeInput = e => {
		setInput(e.target.value);
	};
	const onChangeSelect = e => {
		setRange(e.target.value);
	};
	const onSubmit = e => {
		e.preventDefault();
		onGetApi(input, range);
	};
	return (
		<div className="SearchInput">
			<form onSubmit={onSubmit}>
				<input type="text" value={input} onChange={onChangeInput} />
				<select name="range" value={range} onChange={onChangeSelect}>
					<option value="1d" defaultValue>
						1 day
					</option>
					<option value="5d">5 day</option>
					<option value="1mo">1 month</option>
					<option value="3mo">3 month</option>
					<option value="6mo">6 month</option>
					<option value="1y">1 year</option>
					<option value="2y">2 year</option>
					<option value="5y">5 year</option>
					<option value="10y">10 year</option>
					<option value="max">max</option>
				</select>
				<button className="search-btn" type="submit">
					검색
				</button>
			</form>
		</div>
	);
}

export default SearchInput;
