import React from 'react';
import Button from './Button';
import '../assets/scss/HomeComponent.scss';
import LogoImg from './LogoImg';
import SearchInput from './SearchInput';

function HomeComponent({ onSetLogout, loginState }) {
	return (
		<div>
			<header>
				{!loginState ? (
					<div className="login_btn_box">
						<Button>로그인</Button>
						<Button>회원가입</Button>
					</div>
				) : (
					<div className="logout_btn_box">
						<Button onClick={onSetLogout}>로그아웃</Button>
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
