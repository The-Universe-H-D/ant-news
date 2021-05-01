import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import '../assets/scss/SearchInput.scss';
import AutoComplete from './AutoComplete';

function SearchInput({ onGetApi, onSetXAxis }) {
	const [input, setInput] = useState('');
	const [items, setItems] = useState([]);
	const [symbol, setSymbol] = useState('');
	const onChangeInput = async e => {
		const targetValue = e.target.value;
		setInput(targetValue);
		setSymbol(targetValue);
		try {
			const res = await axios(`/Stock/search?keyword=${targetValue}`);
			setItems(res.data.stockCodes);
		} catch (e) {
			console.log(e);
		}
	};
	const onSubmit = e => {
		e.preventDefault();
		onGetApi(symbol, '1d');
	};
	const onClick = e => {
		const range = e.target.value;
		onGetApi(symbol, range);
		if (range === '1d' || range === '5d') {
			onSetXAxis('true');
		} else {
			onSetXAxis('false');
		}
	};
	const valueInput = useRef();
	const onlistClick = (val1, val2) => {
		setInput(val1);
		setSymbol(val2);
		valueInput.current.focus();
		localStorage.setItem('inputValue', val1);
		setItems([]);
	};
	useEffect(() => {
		//setInput(localStorage.getItem('inputValue'));
	}, []);
	return (
		<div className="SearchInput">
			<form onSubmit={onSubmit}>
				<input value={input} onChange={onChangeInput} ref={valueInput} />
				<button className="search-btn" type="submit">
					검색
				</button>
				<AutoComplete items={items} onlistClick={onlistClick} />
				<div className="rangeBtns">
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
