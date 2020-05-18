import React from 'react';

import { ListRepos } from './ListRepos';

export default { title: 'Button' };

export const withRepos = () => <ListRepos repos={[]} />;
