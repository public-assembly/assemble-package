&nbsp;

![Public Assembly - Assemble Package](https://nftstorage.link/ipfs/bafybeifgfawktmbkxajkgxcq3qtuaoh5rmin4keynhzdkpzz52jnrcveay/assemble_package.png)

&nbsp;

## Assemble Package

A lightweight [monorepo template](https://github.com/public-assembly/assemble-package) intended for use in developing javascript packages. Assemble Package leverages:

- [pnpm](https://pnpm.io/) for dependency management
- [turbo](https://turbo.build/) for monorepo build and compile management
- [preconstruct](https://preconstruct.tools/) to build packages
- [changesets](https://github.com/changesets/changesets) to manage changelogs and publishing to the npm package registry.

---

## Setup

After creating your new repo from the github template, name your package(s) and modify the contents of the `packages` directory to reflect that. Use the example in the packages directory as a reference. You can simply rename both the directory and name in the `package.json` file and work off of that.

- Install dependencies: `pnpm install`
- Run app: `pnpm run dev`

---

## Initialization

1. Remove the sample package in the `packages` directory.
2. Make a new directory with your package folder name.
3. Navigate to that directory and run `pnpm init` to create a fresh package.json file.
4. Make sure to add a [namespace / scope](https://docs.npmjs.com/about-scopes) to the package name.
5. Once that is all set up run `pnpm preconstruct init` from the root directory: this will add the necessary config for development and publishing.
6. Start adding dependencies and building! When adding dependencies navigate to the package you are installing dependencies within and then run. `pnpm add [package-name]`.
7. If you don't want to bundle the dependency in the package make sure to specify the package as a peer dependency by using the `--save-peer` flag.
8. If you ran the example apps before all this setup make sure to remove any .next / .parcel-cache and dist directories! If you don't clean up you will have problems moving forward.

---

## Publishing

Note: in order to leverage the monorepo approach in a npm publishing workflow you need to have a paid NPM account - this unlocks private packages (sadly a mandatory in this context).

---

## Example

There is an example Next.js app configured with turbo to work as a testing sandbox for your package development (or you can simply use it as a starting point for your dapp). You will need to modify your imports to reflect the new package name.

In the example app's `package.json` you will need to import your development package like so:

```json 
"dependencies": {
  "[package-name-here]": "workspace:*"
}
```

&nbsp;

Additionally, in `next.config.ts`, update the following field with the name of your package:

```ts
const nextConfig = {
  ...
  transpilePackages: ['your-package-name-here'],
}
```

&nbsp;

Both examples have been configured to support web3 technologies out of the box with the below dependencies:

- [ethers.js](https://docs.ethers.org/v5/) for interacting with Ethereum.
- [wagmi](https://wagmi.sh/) for React hooks.
- [ConnectKit](https://docs.family.co/connectkit) for web3 wallet connection.
- [Tailwind CSS](https://tailwindcss.com/) for styling ease.
- [SWR](https://swr.vercel.app/) for fetch utils + caching
- [Next.js](https://nextjs.org/) for a robust React framework. 

&nbsp;

Note that this is the most recent version of React and Next.js which introduces more stringent methodolgies around server and client side rendering. This is a good test environment to illustrate optimal package usage especially when content is not hydrated.

&nbsp;