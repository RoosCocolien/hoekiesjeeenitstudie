import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import { GlobalStyle } from './App.styles';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Info from './pages/Info';
import Quiz from './components/Quiz';
import Contact from './pages/Contact/Contact';

const App = () => {
	return (
		<>
		<GlobalStyle />
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
		</>
	)
}

export default App;