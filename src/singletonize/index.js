import { globalScope } from '@cocopina/environment';
import encode from '../../lib/encode';
import { GLOBAL_SINGLETONS, ALLOW_CONSTRUCTION } from '../../lib/constants';

/**
 * Gets the singleton's instance.
 * If none exists, will create a new one and store it on the global scope.
 * @return {Object}
 */
function getInstance() {
    globalScope[GLOBAL_SINGLETONS] = globalScope[GLOBAL_SINGLETONS] || {};

    const key = encode(this.className);
    let instance = globalScope[GLOBAL_SINGLETONS][key];

    if (instance) return instance;

    this.prototype[ALLOW_CONSTRUCTION] = true;
    instance = globalScope[GLOBAL_SINGLETONS][key] = new this();
    this.prototype[ALLOW_CONSTRUCTION] = false;

    return instance;
}

/**
 * Clears the singleton's instance from the global scope.
 */
function clear() {
    globalScope[GLOBAL_SINGLETONS] = globalScope[GLOBAL_SINGLETONS] || {};

    const key = encode(this.className);

    globalScope[GLOBAL_SINGLETONS][key] = null;
}

export default function singletonize(Klass) {
    Object.defineProperty(Klass, 'instance', {
        get: function() {
            return this.getInstance();
        }
    });

    Object.assign(Klass, {
        getInstance,
        clear
    });
}
