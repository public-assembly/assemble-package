# Assemble Package

## Set up:
After creating your new repo from the github template plan out what your package(s) will be named and modify the contents of the `packages` directory to reflect this planning. Use the examples in the packages directory as reference, although you could rename both the directory and the name in the `package.json` file of any of the examples and work off of them.

## Core concepts:
This is a monorepo and therefore introduces a few additional steps to getting all set up.

There are also mandatory concepts & dependencies that assist in a smooth development process:
- [Yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/)
- [Preconstruct](https://preconstruct.tools/): 
- [Changesets](https://github.com/changesets/changesets)

1. Initialization:

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

### Further Reading:
- [https://monorepo.guide/getting-started](Monorepo Guide: Getting Started)