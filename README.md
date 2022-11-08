# Invia testing project 2022
author: Tomas Bilina

React/TypeScript project based on boilerplate with modern tooling, for Node.js programs, libraries and browser modules. Get started quickly and right-footed 🚀

## Getting Started

```bash
# Clone the repository (you can also click "Use this template")
git clone https://github.com/metachris/typescript-boilerplate.git your_project_name
cd your_project_name

# Edit `package.json` and `tsconfig.json` to your liking
...

# Install dependencies and use Chrome extension [Moesif](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc) to change CORS
yarn install

# Now you can run various yarn commands:
yarn esbuild-main:watch
...
```

* Take a look at all the scripts in [`package.json`](https://github.com/metachris/typescript-boilerplate/blob/master/package.json)
* For publishing to npm, use `yarn publish` (or `npm publish`)

## esbuild

[esbuild](https://esbuild.github.io/) is an extremely fast bundler that supports a [large part of the TypeScript syntax](https://esbuild.github.io/content-types/#typescript). This project uses it to bundle for browsers (and Node.js if you want).

```bash
# Build for browsers
yarn esbuild-main:dev
yarn esbuild-main:watch
