import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import '../assets/scss/SearchInput.scss';
import AutoComplete from './AutoComplete';

function SearchInput({ onGetApi, onSetXAxis }) {
	const [input, setInput] = useState('');
	const [items, setItems] = useState([]);
	const [symbol, setSymbol] = useState('');

	const onChangeInput = e => {
		const targetValue = e.target.value;
		setInput(targetValue);
	};

	const onAutoComplete = async input => {
		if (input !== '') {
			try {
				await axios.get(`/Stock/search?keyword=${input}`).then(function (res) {
					if (res.status === 200) {
						setSymbol(res.data.stockCodes[0].symbol);
						localStorage.setItem('inputValue', res.data.stockCodes[0].longname);
						localStorage.setItem('symbolValue', res.data.stockCodes[0].symbol);
						setItems(res.data.stockCodes);
					}
				});
			} catch (e) {
				console.log(e);
			}
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
		localStorage.setItem('symbolValue', val2);
		setItems([]);
	};

	useEffect(() => {
		const { cancel, token } = axios.CancelToken.source();
		const timeOutId = setTimeout(() => onAutoComplete(input, token), 500);
		return () => cancel('No longer latest query') || clearTimeout(timeOutId);
	}, [input]);

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
