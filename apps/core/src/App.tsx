import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';

import { ListRepos } from '@github-clone/repos';
import { UsernameContext } from '@github-clone/context';
import { UsernameForm } from './UsernameForm/UsernameForm';

function App() {
  const [username, setUsername] = useState<string>('');

  const onUsernameChange = (username: string) => setUsername(username);

  return (
    <UsernameContext.Provider value={username}>
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
            <UsernameForm onUsernameChange={onUsernameChange} />

            <Switch>
              <Route path="/repos">
                <ListRepos />
              </Route>
              <Route path="/prs">PRs</Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </UsernameContext.Provider>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
