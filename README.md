# Answers Core

<a href="https://github.com/yext/answers-core/blob/master/docs/answers-core.md">Full Documentation</a>

<div>
  <a href="https://npmjs.org/package/@yext/answers-core">
    <img src="https://img.shields.io/npm/v/@yext/answers-core" alt="NPM version"/>
  </a>
  <a href="https://github.com/yext/answers-core/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-BSD%203--Clause-blue.svg" alt="License"/>
  </a>
</div>
<br>

Answers Core is a networking library for interacting with the Yext Answers API. 

- Works in both the **browser** and **Node.js**
- 100% **TypeScript**, with detailed request and response models
- Compatible with both **CommonJS** and **ES6** imports
- Offers a ponyfilled ES5 bundle, that doesn't pollute the global namespace

## Getting Started

First, install Answers-core via [npm](https://www.npmjs.com/get-npm):

```bash
npm install @yext/answers-core
```

Next, import and initialize the core library in your application.

The apiKey and experienceKey will come from your Answers experience on yext.com. You can signup for a free trial at [https://www.yext.com/free-trial/](https://www.yext.com/free-trial/).

```js
import { provideCore } from '@yext/answers-core';
const core = provideCore({
  apiKey: '<your api key>',
  experienceKey: '<one of your experience keys>',
  locale: 'en',
  experienceVersion: 'PRODUCTION',
});
```

To use the ES5 bundle, which is compatible with browsers like Internet Explorer 11 out of the box, import from `@yext/answers-core/legacy` instead.

```js
import { provideCore } from '@yext/answers-core/legacy';
```

Now that the core is initialized, let's run a search on an "FAQs" vertical.

```js
core.verticalSearch({
  verticalKey: 'FAQs',
  query: 'What is Yext Answers?',
}).then(results => {
  // Do something with the search results
}).catch(err => {
  // Handle errors from the backend or thrown by the core library
});
```

And that's it! See **[our documentation](https://github.com/yext/answers-core/tree/master/docs/answers-core.answerscore.md)** for a full list of supported API calls.

## License

Yext Answers-core is an open-sourced library licensed under the [BSD-3 License](https://github.com/yext/answers-core/blob/master/LICENSE).
