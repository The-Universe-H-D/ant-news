import React from 'react';
import SearchInput from './SearchInput';
import { Line } from 'react-chartjs-2';
import Header from './Header';
import '../assets/scss/SearchPage.scss';

function SearchPage() {
	const options = {
		legend: {
			display: false // label 보이기 여부
		},
		scales: {
			yAxes: [
				{
					ticks: {
						min: 0, // y축 스케일에 대한 최소값 설정
						stepSize: 1 // y축 그리드 한 칸당 수치
					}
				}
			]
		},

		// false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
		// true : 크기가 알아서 결정됨.
		maintainAspectRatio: false
	};
	const data = {
		// 각 막대별 라벨
		labels: ['1월', '2월', '3월'],
		datasets: [
			{
				borderWidth: 1, // 테두리 두께
				data: [80000, 85000, 90000], // 수치
				backgroundColor: ['blue'] // 각 막대 색
			}
		]
	};
	return (
		<div className="SearchPage">
			<Header />
			<div className="container">
				<nav className="nav">
					<b className="nav-title">종목</b>
					<ul className="nav-list">
						<li>삼성전자</li>
						<li>테슬라</li>
						<li>카카오</li>
					</ul>
				</nav>
				<section className="sec">
					<div className="sec-search">
						<SearchInput />
					</div>
					<div className="sec-contents">
						<div style={{ height: '400px', width: '80%', margin: 'auto' }}>
							<Line data={data} options={options} height={300} />
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default SearchPage;
