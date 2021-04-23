import React from 'react';
import Button from './Button';
import '../assets/scss/HomeComponent.scss';
import LogoImg from './LogoImg';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
import googleLogo from '../assets/img/google.png';

function HomeComponent({ onSetLogout, loginState }) {
	return (
		<div>
			<header>
				{!loginState ? (
					<div className="login_btn_box">
						<Link to="/login">
							<button>
								<img alt="google logo" url={googleLogo} />
								<b>구글 이메일 로그인</b>
							</button>
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
