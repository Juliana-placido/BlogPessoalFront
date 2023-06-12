import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

