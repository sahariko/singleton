# Singleton [![](https://img.shields.io/npm/v/@cocopina/singleton.svg?colorA=cb3837&colorB=474a50)](https://www.npmjs.com/package/@cocopina/singleton)

A truly global, isomorphoic, extendable JavaScript singleton class.

## Table of Contents

- [Installation and Usage](#installation-and-usage)
    * [Extending the `Singleton` class](#extending-the-singleton-class)
    * [Using the `asSingleton` decorator](#using-the-asSingleton-decorator)

## Installation and Usage

Install the package:
```sh
npm i @cocopina/singleton
```

### Extending the `Singleton` class

You can then extend your class to implement the `Singleton` class:
```js
import Singleton from '@cocopina/singleton';

class MyClass extends Singleton {}

const a = MyClass.getInstance();
const b = MyClass.getInstance();

console.log(a === b); // true
```

### Using the `asSingleton` decorator

You can alternatively use the `asSingleton` decorator like so:

```js
import { asSingleton } from '@cocopina/singleton';

class MyClass {}

const MySingletonClass = asSingleton(MyClass);

const a = MySingletonClass.getInstance();
const b = MySingletonClass.getInstance();

console.log(a === b); // true
```

## API

### `getInstance [Function]`

Gets the singleton's instance.

If none exists, will create a new one and store it on the global scope.

#### `@return` {Object}

### `instance [Object]`

Gets the singleton's instance, an alias for `getInstance()`.

### `clear [Function]`

Clears the singleton's instance from the global scope.
