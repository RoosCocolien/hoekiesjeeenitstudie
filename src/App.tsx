import React from 'react';
import './styles/App.css'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import Introduction from './components/Introduction';
import Info from './components/Info';
import Quiz from './components/Quiz';
import Contact from './components/Contact/Contact';

const App = () => {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route exact path='/' component={Home}></Route>
				<Route exact path='/introduction' component={Introduction}></Route>
				<Route exact path='/contact' component={Contact}></Route>
				<Route exact path='/info' component={Info}></Route>
				<Route exact path='/quiz' component={Quiz}></Route>
			</Switch>
			<Footer />
		</Router>
	)
}

export default App;