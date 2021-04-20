import React, { useState } from 'react';

function LoginComponents({ getUsers }) {
	const [input, setInput] = useState('');
	const onChange = e => {
		const value = e.target.value;
		const name = e.target.name;
		setInput({
			[name]: value
		});
	};
	const onSubmit = getUsers => {
		getUsers.find(user =>
			user.userId === input.id
				? user.userPw === input.pw
					? alert('로그인성공')
					: alert('비번이 다름')
				: alert('아이디가 다름. ')
		);
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input type="text" id="id" name="id" placeholder="아이디" value={input.id} onChange={onChange} />
				<input type="password" id="pw" name="pw" placeholder="비밀번호" value={input.pw} onChange={onChange} />
				<button type="submit">로그인</button>
			</form>
		</div>
	);
}

export default LoginComponents;
