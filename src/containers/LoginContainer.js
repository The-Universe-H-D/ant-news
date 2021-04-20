import React from 'react';
import { useDispatch } from 'react-redux';
import users from '../api/loginAPI';
import LoginComponents from '../components/LoginComponent';
import { userLoginThunk } from '../modules/login';

const getUsers = () => {
	try {
		return users;
	} catch (e) {
		console.log(e);
	}
};
function LoginContainer() {
	//const login = useSelector(state => state.login)
	const dispatch = useDispatch();
	const onSetLogin = () => {
		dispatch(userLoginThunk());
	};
	return (
		<div>
			<LoginComponents getUsers={getUsers} onSetLogin={onSetLogin} />
		</div>
	);
}

export default LoginContainer;
