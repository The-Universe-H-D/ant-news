import React from 'react';
import '../assets/scss/SearchInput.scss';

function SearchInput({ onGetApi }) {
	return (
		<div className="SearchInput">
			<form onSubmit={onGetApi}>
				<input type="text" placeholder="검색어를 입력하세요. (예시) 삼성전자)" />
				<button type="submit">검색</button>
			</form>
		</div>
	);
}

export default SearchInput;
