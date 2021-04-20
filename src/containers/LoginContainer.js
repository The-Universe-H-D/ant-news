import React from 'react';
import users from '../api/loginAPI';
import LoginComponent from '../components/LoginComponent';

const getUsers = () => {
	try {
		return users;
	} catch (e) {
		console.log(e);
	}
};
function LoginContainer() {
	return (
		<div>
			<LoginComponent getUsers={getUsers} />
		</div>
	);
}

export default LoginContainer;
