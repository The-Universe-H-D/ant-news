import React, { useState } from 'react';

const { Kakao } = window;

function KakaoLoginComponent() {
	const [loginState, setLoginState] = useState(false);
	const [nickname, setNickname] = useState('');
	const loginWithKakao = () => {
		Kakao.Auth.login({
			success: function (authObj) {
				const { access_token } = authObj;
				Kakao.Auth.setAccessToken(access_token);
				Kakao.API.request({
					url: '/v2/user/me',
					success: function (res) {
						setLoginState(true);
						setNickname(res.properties.nickname);
					},
					fail: function (error) {
						console.log('login success, but failed to request user information: ' + JSON.stringify(error));
					}
				});
			},
			fail: function (err) {
				console.log(JSON.stringify(err));
			}
		});
	};

	const onLogOut = () => {
		if (!Kakao.Auth.getAccessToken()) {
			console.log('Not logged in.');
			return;
		}
		Kakao.Auth.logout(function () {
			setLoginState(false);
			console.log(Kakao.Auth.getAccessToken());
		});
	};
	return (
		<div>
			{loginState ? (
				<span>
					{nickname}님 환영합니다. <button onClick={onLogOut}>카카오 로그아웃</button>
				</span>
			) : (
				<button onClick={loginWithKakao}>카카오 로그인</button>
			)}
		</div>
	);
}

export default KakaoLoginComponent;
