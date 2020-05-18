import React from 'react';

import { ListRepos } from './ListRepos';
import { Repo } from '../interfaces';

export default { title: 'Repos|Repos Page' };

export const withoutRepos = () => <ListRepos repos={[]} />;

const repos = [
  { html_url: 'https://github.com/digital-ai/lisbon-evolution' },
  { html_url: 'https://github.com/digital-ai/lisbon-info' },
] as Repo[];

export const withRepos = () => <ListRepos repos={repos} />;
