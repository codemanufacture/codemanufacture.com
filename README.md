# Codemanufacture Website

[![node >= 8.x](https://img.shields.io/badge/node-%3E%3D%208.x-brightgreen.svg?style=flat-square)](https://nodejs.org/)
[![CircleCI](https://circleci.com/gh/codemanufacture/codemanufacture.com.svg?style=svg)](https://circleci.com/gh/codemanufacture/codemanufacture.com)

The code base for the [Codemanufacture](https://codemanufacture.com/) website.

## Features

-   [Gatsby 1.0](https://www.gatsbyjs.org/)
    -   [React Next](https://www.gatsbyjs.org/packages/gatsby-plugin-react-next) - React 16 support
    -   [Sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap)
    -   [Typescript](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript)
-   Development, QA Tools and automation
    -   [CircleCI](https://circleci.com/)
    -   [Prettier](https://prettier.io/)
    -   [Typescript](https://www.typescriptlang.org/) / [tslint](https://palantir.github.io/tslint/)
-   SEO
    -   [Helmet](https://github.com/nfl/react-helmet)
    -   [Robots.txt](https://moz.com/learn/seo/robotstxt)
    -   [Sitemap](https://www.sitemaps.org/protocol.html)

## Files structure

     .
     ├── .circleci                     // CircleCI automated deployment configuration
     ├── gatsby-config.js              // gatsby configuration
     ├── gatsby-node.js                // gatsby node hooks
     ├── package.json
     ├── public                        // output folder (in .gitignore)
     ├── README.md                     // this file     
     ├── src                           // sources
     │   ├── components                // all react components
     │   ├── declarations.d.ts         // declarations for no typescript modules/files
     │   ├── graphql-types.d.ts        // graphql types (`yarn graphql-types`)
     │   ├── layouts                   // layouts
     │   │   └── index.tsx             // default layout (required)
     │   └── pages                     // pages
     ├── static                        // static files automatically copied to output folder
     ├── tsconfig.json                 // typescript configuration
     ├── tslint.json                   // tslint configuration
     └── yarn.lock                     // yarn lock file

## Development

1. Fork this repo
1. Clone the repo and `cd` into the repo directory
1. Run `yarn` to install dependencies
1. Run `yarn develop` to start a local server

