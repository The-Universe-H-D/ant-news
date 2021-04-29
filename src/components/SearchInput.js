import React, { useState } from 'react';
import { withRouter } from 'react-router';
import '../assets/scss/SearchInput.scss';

function SearchInput({ onGetApi, history }) {
	const [value, setValue] = useState('');
	const onChange = e => {
		setValue(e.target.value);
	};
	const onSubmit = e => {
		e.preventDefault();
		onGetApi(value, history);
	};
	return (
		<div className="SearchInput">
			<form onSubmit={onSubmit}>
				<input type="text" value={value} onChange={onChange} />
				<button className="search-btn" type="submit">
					검색
				</button>
			</form>
		</div>
	);
}

export default withRouter(SearchInput);
