# Assemble Package

## Set up:

After creating your new repo from the github template plan out what your package(s) will be named and modify the contents of the `packages` directory to reflect this planning. Use the examples in the packages directory as reference, although you could rename both the directory and the name in the `package.json` file of any of the examples and work off of them.

- Install Dependencies: `yarn`
- Initialize Yarn (you will need to import the yarn/workspaces plugin): `init:workspaces`

## Core concepts:

This is a monorepo and therefore introduces a few additional steps to getting all set up.

There are also mandatory concepts & dependencies that assist in a smooth development process:

- [Yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/)
- [Preconstruct](https://preconstruct.tools/):
- [Changesets](https://github.com/changesets/changesets)

---

## Initialization:

1. Removing the sample packages in the `packages` directory.
2. Make a new directory with your package folder name.
3. Navigate to that directory and run `yarn init` to create a fresh package.json file.
4. Make sure to add a [namespace / scope](https://docs.npmjs.com/about-scopes) to the package name.
5. Once that is all set up run `yarn preconstruct init`: this will add the necessary config for development and publishing.
6. Start adding dependencies and building! when adding dependencies stay on the root level and make sure to specify the workspace you are targeting. `yarn workspace [package-name] add ....`
7. If you don't want to bundle the dependency in the package make sure to use the `--peer` flag when adding to the workspace!
8. If you ran the example apps before all this setup make sure to remove any .next / .parcel-cache and dist directories! If you don't clean up you will have problems moving forward.

## Publishing:

Note: in order to leverage the monorepo approach in a npm publishing workflow you need to have a paid NPM account - this unlocks private packages (sadly a mandatory in this context).

## Example:

Currently there are 2 example apps you can use to view your work. Simply import your package into either or both. Both examples have been configured to support web3 technologies out of the box with the below dependencies:

- ethers, peed dep for the below web3 packages
- wagmi for web3 integration
- rainbowkit to handle wallet connection
- tailwind css for basic styling / css integration
- swr for fetch utils / caching
- @zoralabs/nft-hooks for reading nft data
- @zoralabs/zdk for querying the zora api

- A Next Js app. Note that this is the most recent version of react and nextjs which introduces more stringent methodolgies around server and client side rendering. This is a good test environment to illustrate optimal package usage especially when content is not hydrated.
- Vanilla React App: Less strict of a development environment in that you will not have to be as careful around SSR issues that are present with the combination of React 18 & Next.js 12+

## TUTORIAL

1. Getting started: Using the template and exploring the Repo: [https://www.loom.com/share/2c06e5556bc4416095491d5ecb595703](https://www.loom.com/share/2c06e5556bc4416095491d5ecb595703)
2. Exploring the repo further, running the example apps to demo the development process and how packages are consumed in development: [https://www.loom.com/share/1bc4f356142046088f40fd02b804eb5d](https://www.loom.com/share/1bc4f356142046088f40fd02b804eb5d)
3. Creating a new package (and removing the examples and references in sample apps to the example packages in the repo template): [https://www.loom.com/share/7a925693f28f4031a8588dd0483d7828](https://www.loom.com/share/7a925693f28f4031a8588dd0483d7828)
4. Demonstrating importing our new package into the example apps: [https://www.loom.com/share/775d05ae0e7e4a15baf941ce6b519f95](https://www.loom.com/share/775d05ae0e7e4a15baf941ce6b519f95)
5. Lets publish a package with changesets: [https://www.loom.com/share/c60acbc744f745abacf7aa1af0b467ab](https://www.loom.com/share/c60acbc744f745abacf7aa1af0b467ab)
6. And finally lets consume the package in another project, make some changes to it and publish again - and then update in the consumer app: [https://www.loom.com/share/92ef615552c9401d81f3b5f21702afe4](https://www.loom.com/share/92ef615552c9401d81f3b5f21702afe4)

### The sample repo:

[https://github.com/dblodorn/dains-really-fly-package](https://github.com/dblodorn/dains-really-fly-package)

### Further Reading:

- [Monorepo Guide: Getting Started](https://monorepo.guide/getting-started)
