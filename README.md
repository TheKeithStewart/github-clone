# GitHub Clone

## Features

- Mono-repo to support multiple apps and create a separation of concerns
  - Apps created using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) to keep with current best practices with React
  - Libraries with domain specific (e.g. repositories, pipelines, tasks, etc.) code and libraries that are shared across them
- TypeScript
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

```
root/
    apps/               - Applications using create-react-app
    packages/           -

```
