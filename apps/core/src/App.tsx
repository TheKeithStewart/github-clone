import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';

import { ListRepos } from '@github-clone/repos';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/repos">Repos</Link>
              </li>
              <li>
                <Link to="/prs">Pull Requests</Link>
              </li>
            </ul>
          </nav>
        </header>

        <div>
          <Switch>
            <Route path="/repos">
              <ListRepos username={'thekeithstewart'} />
            </Route>
            <Route path="/prs">PRs</Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
