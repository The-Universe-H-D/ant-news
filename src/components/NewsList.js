import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/scss/NewsList.scss';
import { initialState } from '../modules/getAPI';

function NewsList({ onGetNewsDetail }) {
	const { newsList } = useSelector(state => state.getApiReducer || initialState);
	const newsListData = newsList.data.data.newsList;

	return (
		<div className="NewsList">
			<b className="news-title">News</b>
			<ul>
				{newsListData.map(news => (
					<li key={news.id} id={news.id} className="lists" onClick={() => onGetNewsDetail(news.id)}>
						<img className="newsImg" alt="news thumbnail" src={news.thumbnail}></img>
						<div className="links">
							<p className="title">{news.title}</p>
							<span className="date">{news.pubDate}</span>
							<span className="provider">{news.provider}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default NewsList;
