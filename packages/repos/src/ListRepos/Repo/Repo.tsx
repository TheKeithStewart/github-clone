import React from 'react';
import ListItem from '@material-ui/core/ListItem';

import { Repo } from '../../interfaces';

export const Repository = ({ html_url }: Repo) => {
  return (
    <ListItem button>
      <span>{html_url}</span>
    </ListItem>
  );
};
