import React from 'react';
import '../assets/scss/HomeComponent.scss';
import LogoImg from './LogoImg';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
import GoogleLogin from './GoogleLogin';

function HomeComponent({ onSetLogout, loginState }) {
	return (
		<div>
			<header>
				{!loginState ? (
					<div className="login_btn_box">
						<Link to="/login">
							<GoogleLogin />
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
		</div>
	);
}

export default HomeComponent;
