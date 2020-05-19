import React from 'react';

import { ListRepos } from './ListRepos';
import { Repo } from '../interfaces';

export default { title: 'Repos|Repos Page' };

const repos = [
  { html_url: 'https://github.com/digital-ai/lisbon-evolution' },
  { html_url: 'https://github.com/digital-ai/lisbon-info' },
] as Repo[];

export const withRepos = () => <ListRepos repos={repos} />;
export const withoutRepos = () => <ListRepos repos={[]} />;
