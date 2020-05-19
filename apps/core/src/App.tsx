import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';

import { UsernameContext } from '@github-clone/context';
import { UsernameForm } from './UsernameForm/UsernameForm';

const ReposPage = lazy(() => import('@github-clone/repos'));

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

            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/repos">
                  <ReposPage />
                </Route>
                <Route path="/prs">PRs</Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Suspense>
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
