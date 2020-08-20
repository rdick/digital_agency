import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

import Home from './screens/01_home'
import About from './screens/02_about'
import Contact from './screens/03_contact'
import Services from './screens/04_services'
import Work from './screens/05_work'

function App() {
  return (
    <Router>
      <div >
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/work" component={Work} />
        </Switch>

        <Footer />
      </div>
    </Router>

  );
}

export default App;
