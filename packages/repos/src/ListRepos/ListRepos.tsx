import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from '@material-ui/core/List';

import './ListRepos.scss';

import { Repo } from '../interfaces';
import { Repository } from './Repo/Repo';

type Props = {
  username: string;
};

export const ListRepos = ({ username }: Props) => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    if (username) {
      axios
        .get<Repo[]>(`https://api.github.com/users/${username}/repos`)
        .then((resp) => resp.data)
        .then((data) => setRepos(data));
    }
  }, [username]);

  return (
    <div className="list-repos-container">
      <h3>List Repos</h3>

      <List className="repo-list">
        {repos.map((repo, index) => (
          <Repository key={index} {...repo} />
        ))}
      </List>
    </div>
  );
};
