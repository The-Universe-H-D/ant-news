import React from 'react';
import Button from './Button';
import '../assets/scss/SearchInput.scss';
import { Link } from 'react-router-dom';

function SearchInput() {
	return (
		<div className="SearchInput">
			<form>
				<input type="text" placeholder="검색어를 입력하세요. (예시) 삼성전자)" />
				<Link to="/search">
					<Button>검색</Button>
				</Link>
			</form>
		</div>
	);
}

export default SearchInput;
