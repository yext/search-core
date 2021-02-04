# Answers Core

<div>
  <a href="https://npmjs.org/package/@yext/answers-core">
    <img src="https://img.shields.io/npm/v/@yext/answers-core" alt="NPM version"/>
  </a>
  <a href="https://github.com/yext/answers-core/actions">
    <img src="https://github.com/yext/answers-core/workflows/Run%20Tests/badge.svg" alt="Run Tests Workflow"/>
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-BSD%203--Clause-blue.svg" alt="License"/>
  </a>
</div>

## ⭐ Features

- Thin & **minimal low-level HTTP client** to interact with the Yext Answers API
- Works in both the **browser** and **Node.js**
- **UMD compatible**, you can use it with any module loader
- 100% **TypeScript**, with detailed request and response models
- Offers both **ES6** and **CommonJS** versions

## 💡 Getting Started

First, install Answers-core via [npm](https://www.npmjs.com/get-npm):

```bash
npm install @yext/answers-core
```

Then, initialize the core library in your application.

```js
import { provideCore } from '@yext/answers-core';
const core = provideCore({
  apiKey: '<your api key>',
  experienceKey: '<one of your experience keys>',
  locale: 'en',
  experienceVersion: 'PRODUCTION',
});
```

Finally, let's run a search on an "FAQs" vertical.

```js
core.verticalSearch({
  verticalKey: 'FAQs',
  query: 'What is Yext Answers?',
}).then(results => {
  // Do something with the search results
});
```

See **[our documentation](docs/answers-core.answerscore.md)** for a full list of supported API calls.

## 📄 License

Yext Answers-core is an open-sourced library licensed under the [BSD-3 License](LICENSE.txt).