import React from 'react';
import './App.scss';
import { ListRepos } from '@github-clone/repos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and blah save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <ListRepos />
      </header>
    </div>
  );
}

export default App;
