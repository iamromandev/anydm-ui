# deepcopy-esm

This is a fully-ESM compatible version of the [`deepcopy`](https://www.npmjs.com/package/deepcopy) package.

## Install

```sh
npm i deepcopy-esm
```

## Usage

This package exports the API a little bit differently than [`deepcopy`](https://www.npmjs.com/package/deepcopy) does:

<!-- example-link: src/deep-copy.example.ts -->

```TypeScript
import {deepCopy} from 'deepcopy-esm';

const someObject = {};

const myCopy = deepCopy(someObject);
```

For all other docs, see https://www.npmjs.com/package/deepcopy directly.
