import React from 'react';
import { render } from '@testing-library/react';
import { ListRepos } from './ListRepos';

test('renders learn react link', () => {
  const { getByText } = render(<ListRepos />);
  const linkElement = getByText(/List Repos/i);
  expect(linkElement).toBeInTheDocument();
});
