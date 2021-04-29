import React from 'react';
import '../assets/scss/NewsList.scss';

function NewsList({ newsList }) {
	return (
		<div className="NewsList">
			<ul>
				{newsList.map(news => (
					<li key={news.id} id={news.id} className="lists">
						<img className="newsImg" alt="news thumbnail" src={news.thumbnail}></img>
						<a className="links">
							<span>{news.title}</span>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default NewsList;
