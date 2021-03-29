import './App.css';
import Header from './components/Header/Header';
import ShopifySites from './components/ShopifySites/ShopifySites';
import Footer from './components/Footer/Footer';
import Index from './components/Index/Index';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import StaticBackground from './components/Background/StaticBackground'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App" id="App">
			<Header />
			<StaticBackground />
			<main>
				<Router>
					<Switch>
						<Route path="/" exact component={Index} />
						<Route path="/about" exact component={About} />
						<Route path="/shopify-portfolio" exact component={ShopifySites} />
						<Route path="/skills" exact component={Skills} />
						<Route path="/contact" exact component={Contact} />
					</Switch>
				</Router>
				<Footer />
			</main>
		</div>
	);
}

export default App;
