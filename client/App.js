import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Components
import About from './pages/About';
import Home from './pages/Home';

export default () => {
  return (
    <Router>
      <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </div>
    </Router>
  )
}