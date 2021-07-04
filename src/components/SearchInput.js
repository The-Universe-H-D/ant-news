import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import '../assets/scss/SearchInput.scss';
import { getSearchHistoryAsync, initialState } from '../modules/getAPI';
import AutoComplete from './AutoComplete';

function SearchInput({ onGetApi, onSetXAxis }) {
	const { hasResult } = useSelector(state => state.getApiReducer || initialState);
	const { id } = useSelector(state => state.setLoginReducer.loginGoogle);

	const [input, setInput] = useState('');
	const [items, setItems] = useState([]);

	const onChangeInput = e => {
		const targetValue = e.target.value;
		setInput(targetValue);
	};

	const onAutoComplete = async input => {
		if (input !== '') {
			try {
				const token = process.env.REACT_APP_API_KEY;
				const config = {
					headers: { Authorization: `Bearer ${token}` }
				};
				await axios
					.get(`${process.env.REACT_APP_API_DOMAIN}/Stock/search?keyword=${input}`, config)
					.then(function (res) {
						console.log(res)
						console.log(process.env.REACT_APP_API_KEY)
						if (res.status === 200) {
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
		getSearchHistoryAsync(id, localStorage.getItem('symbolValue'));
		onGetApi(localStorage.getItem('symbolValue'), '1d');
	};
	const onClick = e => {
		const range = e.target.value;
		onGetApi(localStorage.getItem('symbolValue'), range);
		if (range === '1d' || range === '5d') {
			onSetXAxis('true');
		} else {
			onSetXAxis('false');
		}
	};
	const valueInput = useRef();
	const onlistClick = (val1, val2) => {
		setInput(val1);
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
				{hasResult ? (
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
				) : (
					''
				)}
			</form>
		</div>
	);
}

export default SearchInput;
