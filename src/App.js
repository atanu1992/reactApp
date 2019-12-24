import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/shared/layout';
import Navigation from './components/shared/navigation';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <Layout>

        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
