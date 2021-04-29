import React from 'react';
import { Line } from 'react-chartjs-2';

function Graph({ dateTime, average, low, high }) {
	const options = {
		legend: {
			display: true // label 보이기 여부
		},
		scales: {
			y: [
				{
					ticks: {
						suggestedMin: 0,
						suggestedMax: 1000000
					}
				}
			]
		},
		maintainAspectRatio: false
	};
	const sliceDateTime = dateTime.map(ele => ele.slice(8, 14));
	const data = {
		// 각 막대별 라벨
		labels: sliceDateTime,
		datasets: [
			{
				borderWidth: 1, // 테두리 두께
				data: average, // 수치
				label: 'Average',
				fill: true,
				backgroundColor: 'rgba(0,0,0,0)',
				borderColor: 'rgba(0,0,0,0.8)',
				pointBorderWidth: 0,
				borderDash: [5]
			},
			{
				borderWidth: 0.1, // 테두리 두께
				data: low, // 수치
				label: 'Low',
				fill: true,
				backgroundColor: 'rgba(75,192,192,0.7)',
				borderColor: 'rgba(75,192,192,1)',
				pointBorderWidth: 0,
				pointBackgroundColor: 'rgba(0,0,0,0)'
			},
			{
				borderWidth: 0.5, // 테두리 두께
				data: high, // 수치
				label: 'High',
				fill: true,
				backgroundColor: 'rgba(239, 0, 0, 0.2)',
				borderColor: 'rgba(239, 0, 0, 1)',
				pointBorderWidth: 0,
				pointBackgroundColor: 'rgba(0,0,0,0)'
			}
		]
	};
	return (
		<div>
			<div className="graph" style={{ height: '400px', width: '80%', margin: 'auto' }}>
				<Line data={data} options={options} height={300} />
			</div>
		</div>
	);
}

export default Graph;