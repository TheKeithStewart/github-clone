# GitHub Clone

## Concerns to Address

- Having a monolithic application that is not modularized
- Hard to tell when something changes underneath
- Clear separation of applications (e.g. main and admin applications)
- Meaningful routes (e.g. /repositories, /pipelines, etc.)
- Deep linking
- Handle having multiple teams working in the same codebase

## Features

- Mono-repo to support multiple apps and create a separation of concerns
  - Apps created using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) to keep with current best practices with React
  - Libraries with domain specific (e.g. repositories, pipelines, tasks, etc.) code and libraries that are shared across them
- TypeScript
  - can use `https://www.npmjs.com/package/babel-plugin-typescript-to-proptypes` to automatically generate PropTypes
- Unit tests with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- Wallaby
- [Storybook](https://storybook.js.org/) for UI component documentation and iscolated dev environment
  - Additional component documentation can be generated with [react-doc-gen-typescript-loader](https://github.com/strothj/react-docgen-typescript-loader)
- SASS
- Routing
- lazy loading
- Component libraries
- State Management?
- testId attributes
- debugging
- formatting with Prettier
- snipits for common patterns (e.g. components)
- data model directories

## Structure

```ts
root/
    apps/                 - Applications using create-react-app
    libs/                 -
      /pipeline
      /progression
      /project
      /tasks
      /shared
```
