import React from 'react';
import { useDispatch } from 'react-redux';
import users from '../api/loginAPI';
import LoginComponent from '../components/LoginComponent';
import { userLoginThunk } from '../modules/login';

const getUsers = () => {
	try {
		return users;
	} catch (e) {
		console.log(e);
	}
};
function LoginContainer({ history }) {
	const dispatch = useDispatch();
	const onSetLogin = () => {
		dispatch(userLoginThunk());
	};
	return (
		<div>
			<LoginComponent onSetLogin={onSetLogin} getUsers={getUsers} history={history} />
		</div>
	);
}

export default LoginContainer;
