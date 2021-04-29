import React from 'react';
import '../assets/scss/NewsList.scss';

function NewsList({ newsList }) {
	return (
		<div className="NewsList">
			<b className="news-title">News</b>
			<ul>
				{newsList.map(news => (
					<li key={news.id} id={news.id} className="lists">
						<img className="newsImg" alt="news thumbnail" src={news.thumbnail}></img>
						<a className="links">
							<p className="title">{news.title}</p>
							<span className="date">{news.pubDate}</span>
							<span className="provider">{news.provider}</span>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default NewsList;
