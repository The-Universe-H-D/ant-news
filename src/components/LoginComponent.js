import React, { useState } from 'react';
import '../assets/scss/LoginComponent.scss';

function LoginComponent({ getUsers, onSetLogin }) {
	const [inputs, setInputs] = useState({
		id: '',
		pw: ''
	});
	const { id, pw } = inputs;
	const onChange = e => {
		const { name, value } = e.target;
		setInputs({
			...inputs,
			[name]: value
		});
	};
	const onSubmit = e => {
		e.preventDefault();
		const users = getUsers();
		users.forEach(user => {
			if (user.userId === id) {
				if (user.userPw === pw) {
					onSetLogin();
				} else {
					console.log('비밀번호가 다릅니다.');
					return;
				}
			} else {
				console.log('아이디가 다릅니다.');
				return;
			}
		});
	};
	return (
		<div className="LoginComponent">
			<form onSubmit={onSubmit}>
				<input type="text" id="id" name="id" placeholder="아이디" value={id} onChange={onChange} />
				<input type="password" id="pw" name="pw" placeholder="비밀번호" value={pw} onChange={onChange} />
				<button type="submit">로그인</button>
			</form>
		</div>
	);
}

export default LoginComponent;
