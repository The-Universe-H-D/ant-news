import React from 'react';
import Button from './Button';
import '../assets/scss/SearchInput.scss';

function SearchInput() {
	return (
		<div className="SearchInput">
			<form>
				<input type="text" placeholder="검색어를 입력하세요. (예시) 삼성전자)" />
				<Button>검색</Button>
			</form>
		</div>
	);
}

export default SearchInput;
