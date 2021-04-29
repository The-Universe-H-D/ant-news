import React from 'react';

function NewsList({ newsList }) {
	return (
		<div>
			<div className="news">
				<ul>
					{newsList.map(news => (
						<li key={news.id} id={news.id} style={{ margin: '1rem' }}>
							<img alt="news thumbnail" src={news.thumbnail} style={{ width: '50px' }}></img>
							{news.title}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default NewsList;
