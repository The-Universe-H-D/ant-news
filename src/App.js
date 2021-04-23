import HomeContainer from './containers/HomeContainer';
import { Route, Switch } from 'react-router';
import LoginContainer from './containers/LoginContainer';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" component={HomeContainer} exact />
				<Route path="/login" component={LoginContainer} />
				<Route
					render={({ location }) => (
						<div>
							<h2>이 페이지는 존재하지 않습니다.</h2>
							<p>{location.pathname}</p>
						</div>
					)}
				/>
			</Switch>
		</div>
	);
}

export default App;
