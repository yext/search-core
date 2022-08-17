# Search Core


<div>
  <a href="https://npmjs.org/package/@yext/search-core">
    <img src="https://img.shields.io/npm/v/@yext/search-core" alt="NPM version"/>
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/License-BSD%203--Clause-blue.svg" alt="License"/>
  </a>
  <a href='https://coveralls.io/github/yext/search-core?branch=master'>
    <img src='https://coveralls.io/repos/github/yext/search-core/badge.svg?branch=master' alt='Coverage Status' />
  </a>
</div>
<br>

Search Core is a networking library for interacting with the Yext Search API.

[Full Documentation](./docs/search-core.md)

## Features

- Works in both the **browser** and **Node.js**
- 100% **TypeScript**, with detailed request and response models
- Compatible with both **CommonJS** and **ES6** imports
- Offers a ponyfilled ES5 bundle which doesn't pollute the global namespace

## Getting Started

For a full getting started walk through, view our [official Hitchhiker Guide](https://hitchhikers.yext.com/guides/search-core-getting-started/).

First, install Search-core via [npm](https://www.npmjs.com/get-npm):

```bash
npm install @yext/search-core
```

Next, import and initialize the core library in your application.

The apiKey and experienceKey will come from your Search experience on yext.com. You can signup for a free trial at [https://www.yext.com/free-trial/](https://www.yext.com/free-trial/).

```js
import { provideCore } from '@yext/search-core';

const core = provideCore({
  apiKey: '<your api key>',
  experienceKey: '<one of your experience keys>',
  locale: 'en',
  experienceVersion: 'PRODUCTION',
});
```

To use the library with Node, use the following import instead:
```js
const { provideCore } = require('@yext/search-core');
``` 

Now that the core is initialized, let's run a search on an "FAQs" vertical.

```js
core.verticalSearch({
  verticalKey: 'FAQs',
  query: 'What is Yext Search?',
}).then(results => {
  // Do something with the search results
}).catch(err => {
  // Handle errors thrown by the core library
});
```

### Explanation of Builds
- The ESM (ES6) build will be used automatically by module bundlers that support it (e.g. Webpack). It can be specified directly by importing `@yext/search-core/lib/esm`
- The CommonJS build will be used automatically by Node, but it can be specified directly by importing `@yext/search-core/lib/commonjs`
- The Legacy (UMD) bundle should be used for supporting IE11 out of the box. It is compiled to ES5 and it contains the necessary ponyfills for IE11. If your application already contains polyfills, we recommend bundling one of the other builds in order to prevent your application from including duplicate polyfills. This bundle can be specified by importing `@yext/search-core/legacy`


And that's it! See **[our documentation](./docs/search-core.searchcore.md)** for a full list of supported API calls.

## License

Yext Search-core is an open-sourced library licensed under the [BSD-3 License](./LICENSE).

## Third Party Licenses

The licenses of our 3rd party dependencies are collected here: [THIRD-PARTY-NOTICES](./THIRD-PARTY-NOTICES).
