## Overview

This project is published on: https://genesis-users.netlify.app/

Libraries used:

- Vite
- Testing Library
- Jest
- ESLint
- Prettier

## Development instructions

- install application dependencies

```bash
npm install
```

- starts the application server

```bash
npm run dev
```

- run all tests

```bash
npm run test
```

- lint repository JavaScript code

```bash
npm run lint
```

### Integration with Netlify

The repository is integrated with the Netlify platform.

Netlify is a web development platform that will allow you to link up to your git repositories and have a domain, environment, ci/cd pipeline all setup and configured from its UI (As well as a ton of other stuff). It essentially encapsulates all the things that typically you would need to be an expert in DevOps to do, but made simple, more about [Netlify](https://www.netlify.com/).

Everytime a 'push' is realized in the [frontend-origin repository](https://github.com/prazeres-rafael/frontend-origin), the environment (https://frontend-origin.netlify.app/) is automatically updated in a few moments.