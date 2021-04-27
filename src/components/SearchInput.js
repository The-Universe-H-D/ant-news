import React, { useState } from 'react';
import '../assets/scss/SearchInput.scss';

function SearchInput({ onGetApi }) {
	const [value, setValue] = useState('');
	const onChange = e => {
		setValue(e.target.value);
	};
	const onSubmit = e => {
		e.preventDefault();
		onGetApi(value);
	};
	return (
		<div className="SearchInput">
			<form onSubmit={onSubmit}>
				<input type="text" value={value} onChange={onChange} />
				<button type="submit">검색</button>
			</form>
		</div>
	);
}

export default SearchInput;
