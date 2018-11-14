# Singleton [![](https://img.shields.io/npm/v/@cocopina/singleton.svg?colorA=cb3837&colorB=474a50)](https://www.npmjs.com/package/@cocopina/singleton)

A truly global, isomorphoic, extendable JavaScript singleton class.

## Installation and Usage

Install the package:
```sh
npm i @cocopina/singleton
```

### Extending the `Singleton` class

You can then extend your class to implement the `Singleton` class:
```js
import Singleton from '@cocopina/singleton';

class MyClass extends Singleton {
    constructor(id) {
        this.id = id;
    }
}

const a = new MyClass(1);
const b = new MyClass(2);

console.log(a.id); // 1
console.log(b.id); // 1
console.log(a === b); // true
```

### Using the `asSingleton` decorator

You can alternatively use the `asSingleton` decorator like so:

```js
import { asSingleton } from '@cocopina/singleton';

class MyClass {
    constructor(id) {
        this.id = id;
    }
}

const MySingletonClass = asSingleton(MyClass);

const a = new MySingletonClass(1);
const b = new MySingletonClass(2);

console.log(a.id); // 1
console.log(b.id); // 1
console.log(a === b); // true
```
