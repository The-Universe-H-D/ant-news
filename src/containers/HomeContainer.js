import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeComponent from '../components/HomeComponent';
import { userLogoutThunk } from '../modules/login';

function HomeContainer({ history }) {
	const loginState = useSelector(state => state.login.login);
	const dispatch = useDispatch();
	const onSetLogout = () => {
		dispatch(userLogoutThunk());
	};
	return (
		<div>
			<HomeComponent onSetLogout={onSetLogout} loginState={loginState} />
		</div>
	);
}

export default HomeContainer;
