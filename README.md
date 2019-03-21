# Codemanufacture Website

[![node >= 8.x](https://img.shields.io/badge/node-%3E%3D%208.x-brightgreen.svg?style=flat-square)](https://nodejs.org/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c767699be8c84f3291e3cecb526a92d1)](https://www.codacy.com/app/Codemanufacture/codemanufacture.com?utm_source=github.com&utm_medium=referral&utm_content=codemanufacture/codemanufacture.com&utm_campaign=Badge_Grade)
[![CircleCI](https://circleci.com/gh/codemanufacture/codemanufacture.com.svg?style=svg)](https://circleci.com/gh/codemanufacture/codemanufacture.com)

The code base for the [Codemanufacture](https://codemanufacture.com/)

## Table of Contents

- [Features](#features)
- [Files structure](#files-structure)
- [Development](#development)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running locally](#running-locally)
  - [Available Scripts](#available-scripts)

## Features

- [Gatsby 2.0](https://www.gatsbyjs.org/) - a static site generator with following plugins:
  - [Canonical urls](https://www.gatsbyjs.org/packages/gatsby-plugin-canonical-urls)
  - [Copy linked files](https://www.gatsbyjs.org/packages/gatsby-remark-copy-linked-files/)
  - [Google Tag Manager](https://www.gatsbyjs.org/packages/gatsby-plugin-google-tagmanager)
  - [Robots.txt](https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt)
  - [Sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap)
  - [Styled Components](https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/)
  - [Typescript](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript)
- Development, QA Tools and automation
  - [CircleCI](https://circleci.com/) - a deployment pipeline
  - [Commitlint](https://marionebl.github.io/commitlint) - commit message linter
  - [GraphQL Code Generator](https://graphql-code-generator.com/)
  - [Husky](https://github.com/typicode/husky) - git hook management
  - [Jest](https://jestjs.io/) - Jest testing framework
  - [Lint staged](https://github.com/okonet/lint-staged) - lint runner against staged git files
  - [Prettier](https://prettier.io/) - an opinionated code formatter
  - [Renovate](https://renovatebot.com/) - automated dependency updates
  - [Stylelint](https://stylelint.io/) - a modern linter for styles
  - [Typescript](https://www.typescriptlang.org/) - a typed superset of JavaScript
  - [tslint](https://palantir.github.io/tslint/) - linter for TypeScript
- Marketing & SEO
  - [Canonical urls](https://support.google.com/webmasters/answer/139066?hl=en)
  - [Google Tag Manager](https://support.google.com/tagmanager/answer/6102821?hl=en)
  - [Helmet](https://github.com/nfl/react-helmet)
  - [Robots.txt](https://moz.com/learn/seo/robotstxt)
  - [Sitemap](https://www.sitemaps.org/protocol.html)

## Files structure

     .
     ├── .circleci                     // CircleCI automated deployment configuration
     ├── .huskyrc                      // husky configuration
     ├── .lintstagedrc                 // lint-staged configuration
     ├── .nvmrc                        // Node Version Manager configuration
     ├── .prettierignore               // prettier ignored files configuration
     ├── .prettierrc                   // prettier configuration
     ├── .stylelintrc                  // stylelint configuration
     ├── codegen.yml                   // GraphQL code generator configuration
     ├── content                       // content
     │   ├── blog                      // markdown blog posts
     │   └── pages                     // markdown pages
     ├── gatsby                        // gatsby node api hooks
     ├── gatsby-config.js              // gatsby configuration
     ├── gatsby-node.js                // gatsby node hooks
     ├── gatsby-ssr.js                 // gatsby server-side rendering api
     ├── package.json                  // node.js application manifest
     ├── plop-templates                // templates for plop generator
     ├── public                        // output folder (in .gitignore)
     ├── README.md                     // this file
     ├── src                           // sources
     │   ├── components                // all react components
     │   ├── declarations.d.ts         // declarations for no typescript modules/files
     │   ├── graphql-types.d.ts        // graphql types (`yarn graphql-types`)
     │   └── pages                     // pages
     ├── static                        // static files automatically copied to output folder
     ├── renovate.json                 // renovate configuration
     ├── tsconfig.json                 // typescript configuration
     ├── tslint.json                   // tslint configuration
     └── yarn.lock                     // yarn lock file

## Development

### Prerequisites

1.  [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
1.  [Node.js](https://nodejs.org/en/download/package-manager/) 10.x
1.  [Yarn](https://yarnpkg.com/en/docs/install)
1.  A fork this repo (for any contributions)

### Installation

1.  Clone the repo `git clone git@github.com:codemanufacture/codemanufacture.com.git`
1.  `cd codemanufacture.com` to go into the project root directory
1.  Run `yarn` to install dependencies

### Running locally

1.  Run `yarn develop` to start the hot-reloading development server
1.  `open http://localhost:8000` to view the site in your the browser

### Available scripts

In the project directory, you can run:

#### `yarn build`

Generates HTML, JavaScript and other static files used for the site in production.

#### `yarn ci-check`

Runs linters and formatters to verify make sure code follows standards.

#### `yarn clean`

Wipes the local environment including built assets and cache

#### `yarn develop`

Runs the site in the development mode.

Open [http://localhost:8000](http://localhost:8000) to view the site in the browser.

Open [http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql) to view the interactive GraphQL editor.

#### `yarn format:source`

Reformats code

#### `yarn graphql-types`

Generates types for GraphQL queries

#### `yarn lint-staged`

Runs linters against staged files

#### `yarn lint:css`

Runs stylelint on source files

#### `yarn lint:source`

Runs tslint on source files

#### `yarn nit:markdown`

Runs prettier on markdown files to print differences from formatting standards

#### `yarn nit:source`

Runs prettier on source files to print differences from formatting standards

#### `yarn plop`

Code generator for common tasks:

- Creation of new page
- Creation of new pure component

#### `yarn serve`

Runs previously [built](#yarn-build) site in the production mode.

#### `yarn test`

Runs tests

#### `yarn test:coverage`

Shows tests coverage

#### `yarn test:update`

Update test snapshots

#### `yarn test:watch`

Watch files for changes and rerun tests related to changed files

#### `yarn type-check`

Runs type check against source files
