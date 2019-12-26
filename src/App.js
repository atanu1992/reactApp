import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/shared/layout';
import Navigation from './components/shared/navigation';
import Login from './components/login/Login';
import Home from './components/home/home';
import Nomatch from './components/shared/Nomatch';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route component={Nomatch} />
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
