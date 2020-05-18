import React from 'react';

import { Repository } from './Repo';
import { Repo } from '../../interfaces';

export default { title: 'Repos|Repo' };

const repo = {
  html_url: 'https://github.com/digital-ai/lisbon-evolution',
} as Repo;

export const withRepo = () => <Repository {...repo} />;
