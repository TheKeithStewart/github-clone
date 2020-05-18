import React, { useContext } from 'react';

export const UsernameContext = React.createContext<string>('');

export const useUsernameContext = () => {
  const username = useContext(UsernameContext);

  if (username === undefined) {
    throw new Error('Uh oh, where is my state?');
  }

  return username;
};
