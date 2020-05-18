import React from 'react';
import List from '@material-ui/core/List';

import './ListRepos.scss';

import { Repository } from './Repo/Repo';
import { Repo } from '../interfaces';

type Props = {
  repos: Repo[];
};
export const ListRepos = ({ repos }: Props) => (
  <div className="list-repos-container">
    <h3>List Repos</h3>

    <List className="repo-list">
      {repos.map((repo, index) => (
        <Repository key={index} {...repo} />
      ))}
    </List>
  </div>
);
