import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Repo } from './interfaces';
import { useUsernameContext } from '@github-clone/context';
import { ListRepos } from './ListRepos/ListRepos';

export const ReposPage = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const username = useUsernameContext();

  useEffect(() => {
    if (username) {
      axios
        .get<Repo[]>(`https://api.github.com/users/${username}/repos`)
        .then((resp) => resp.data)
        .then((data) => setRepos(data));
    }
  }, [username]);

  return (
    <div>
      <ListRepos repos={repos} />
    </div>
  );
};
