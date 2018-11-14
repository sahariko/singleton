import { globalScope } from '../../lib/env';
import encode from '../../lib/encode';

function Singleton() {
    const globalKey = encode(this.constructor.name);
    globalScope.__SINGLETON__ = globalScope.__SINGLETON__ || {};

	if (globalScope.__SINGLETON__[globalKey]) {
        return globalScope.__SINGLETON__[globalKey];
    }

    globalScope.__SINGLETON__[globalKey] = this;
}

export default Singleton;
