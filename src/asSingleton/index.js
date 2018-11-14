import { globalScope } from '../../lib/env';
import encode from '../../lib/encode';
import { NO_ISTANCE_ERROR, GLOBAL_SINGLETONS } from '../../lib/constants';

/**
 * Boolean switch to allow the first initialization;
 * @type {Boolean}
 */
let allowConstruction = false;

const asSingleton = (Klass) => {
    function Singleton() {
        if (allowConstruction) {
            Object.getPrototypeOf(Singleton.prototype).constructor.call(this);
            return;
        }

        throw new Error(NO_ISTANCE_ERROR);
    }

    Singleton.prototype = Object.create(Klass.prototype);

    Singleton.getInstance = function() {
        globalScope[GLOBAL_SINGLETONS] = globalScope[GLOBAL_SINGLETONS] || {};

        const key = encode(Klass.name);
        let instance = globalScope[GLOBAL_SINGLETONS][key];

        if (instance) return instance;

        allowConstruction = true;
        instance = globalScope[GLOBAL_SINGLETONS][key] = new this();
        allowConstruction = false;

        return instance;
    };

    /**
     * Clears the singleton's instance from the global scope.
     */
    Singleton.clear = function() {
        globalScope[GLOBAL_SINGLETONS] = globalScope[GLOBAL_SINGLETONS] || {};

        const key = encode(Klass.name);

        globalScope[GLOBAL_SINGLETONS][key] = null;
    };

    Object.defineProperty(Singleton, 'instance', {
        get: () => Singleton.getInstance()
    });

    return Object.freeze(Singleton);
};

export default asSingleton;
