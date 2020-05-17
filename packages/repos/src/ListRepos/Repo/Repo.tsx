import React from 'react';

import { Repo } from '../../interfaces';

export const Repository = ({ html_url }: Repo) => {
  return (
    <div>
      <span>{html_url}</span>
    </div>
  );
};
