import React from 'react';
import users from '../api/loginAPI';
import LoginComponents from '../components/LoginComponents';

const getUsers = () => {
	try {
		return users;
	} catch (e) {
		console.log(e);
	}
};
function LoginContainers() {
	return (
		<div>
			<LoginComponents getUsers={getUsers} />
		</div>
	);
}

export default LoginContainers;
