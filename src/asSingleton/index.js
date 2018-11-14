import { globalScope } from '../../lib/env';
import encode from '../../lib/encode';

const asSingleton = (Klass) => {
    const { constructor } = Klass;
    const globalKey = encode(constructor.name);
    globalScope.__SINGLETON__ = globalScope.__SINGLETON__ || {};

    Klass.constructor = (...args) => {
        if (globalScope.__SINGLETON__[globalKey]) {
            return globalScope.__SINGLETON__[globalKey];
        }

        globalScope.__SINGLETON__[globalKey] = this;
        constructor(...args);
    };

    return Klass;
};

export default asSingleton;
