import React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/alertState';
import { GitHubState } from './context/gitHub/gitHubState';

function App() {
  return (
    <GitHubState>
      <AlertState>
        <Router>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{ text: 'Test alert' }} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GitHubState>
  );
}

export default App;
