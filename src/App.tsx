import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store.ts';



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

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

