import React, { useEffect, useState } from 'react';
import '../assets/scss/SearchInput.scss';

function SearchInput({ onGetApi, onSetXAxis }) {
	const [input, setInput] = useState(' ');
	const onChangeInput = e => {
		setInput(e.target.value);
		localStorage.setItem('inputValue', input);
	};
	const onSubmit = e => {
		e.preventDefault();
		onGetApi(input, '1d');
	};
	const onClick = e => {
		const range = e.target.value;
		onGetApi(input, range);
		if (range === '1d' || range === '5d') {
			onSetXAxis('true');
		} else {
			onSetXAxis('false');
		}
	};
	useEffect(() => {
		setInput(localStorage.getItem('inputValue'));
	}, []);
	return (
		<div className="SearchInput">
			<form onSubmit={onSubmit}>
				<input type="text" value={input} onChange={onChangeInput} />
				<button className="search-btn" type="submit">
					검색
				</button>
				<div style={true ? { display: 'block' } : { display: 'none' }}>
					<button type="button" onClick={onClick} value="1d">
						1 day
					</button>
					<button type="button" onClick={onClick} value="5d">
						5 day
					</button>
					<button type="button" onClick={onClick} value="1mo">
						1 month
					</button>
					<button type="button" onClick={onClick} value="3mo">
						3 month
					</button>
					<button type="button" onClick={onClick} value="6mo">
						6 month
					</button>
					<button type="button" onClick={onClick} value="1y">
						1 year
					</button>
					<button type="button" onClick={onClick} value="2y">
						2 year
					</button>
					<button type="button" onClick={onClick} value="5y">
						5 year
					</button>
					<button type="button" onClick={onClick} value="10y">
						10 year
					</button>
					<button type="button" onClick={onClick} value="max">
						max
					</button>
				</div>
			</form>
		</div>
	);
}

export default SearchInput;
