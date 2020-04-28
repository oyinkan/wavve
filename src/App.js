import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './../src/fortawesome/css/all.min.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Hidden from './components/Hidden';

function App() {
  return (
    <div>
      <Router>
				<Switch>
          <Route path="/about"> <About /> </Route>
          <Route path="/contact"> <Contact /> </Route>
          <Route path="/faq"> <Faq /> </Route>
          <Route path="/"> <Home /> </Route>
					<Route path="/hidden"> <Hidden /> </Route>
				</Switch>
			</Router>
    </div>
  );
}

export default App;
