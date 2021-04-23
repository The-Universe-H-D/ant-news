import React from 'react';
import Button from './Button';
import '../assets/scss/HomeComponent.scss';
import LogoImg from './LogoImg';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

function HomeComponent({ onSetLogout, loginState }) {
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
		labels: ['1번 막대', '2번 막대', '3번 막대'],
		datasets: [
			{
				borderWidth: 1, // 테두리 두께
				data: [1, 2, 3], // 수치
				backgroundColor: ['yellow', 'red', 'green'] // 각 막대 색
			}
		]
	};
	return (
		<div>
			<header>
				{!loginState ? (
					<div className="login_btn_box">
						<Link to="/login">
							<Button>로그인</Button>
						</Link>
						<Link to="/join">
							<Button>회원가입</Button>
						</Link>
					</div>
				) : (
					<div className="logout_btn_box">
						<b>세션에서 사용자 정보 가져오기</b>
						<button onClick={onSetLogout}>로그아웃</button>
					</div>
				)}
			</header>
			<section className="home_section">
				<LogoImg />
				<SearchInput />
			</section>
			<div style={{ height: '400px' }}>
				<Line data={data} options={options} height={300} />
			</div>
		</div>
	);
}

export default HomeComponent;
