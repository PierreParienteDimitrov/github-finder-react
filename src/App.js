import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Search } from './pages/Search';
import { User } from './pages/User';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Search />
				</Route>
				<Route
					exact
					path='/users/:username'
					render={(props) => <User {...props} />}
				></Route>
			</Switch>
		</Router>
	);
}

export default App;
