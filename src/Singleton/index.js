import { globalScope } from '../../lib/env';
import encode from '../../lib/encode';
import { NO_ISTANCE_ERROR } from '../../lib/constants';

/**
 * The global scope storage key for singleton instances;
 * @type {Symbol}
 */
const globalSingletonsKey = Symbol();

/**
 * Boolean switch to allow the first initialization;
 * @type {Boolean}
 */
let allowConstruction = false;

/**
 * @class Singleton
 * @classdesc A truly global, isomorphoic, singleton.
 * @property {Object} instance Gets the singleton's instance, an alias for getInstance().
 */
class Singleton {
    constructor() {
        if (allowConstruction) return;
        throw new Error(NO_ISTANCE_ERROR);
    }

    /**
     * Gets the singleton's instance.
     * If none exists, will create a new one and store it on the global scope.
     * @return {Object}
     */
    static getInstance() {
        globalScope[globalSingletonsKey] = globalScope[globalSingletonsKey] || {};

        const key = encode(this.name);
        let instance = globalScope[globalSingletonsKey][key];

        if (instance) return instance;

        allowConstruction = true;
        instance = globalScope[globalSingletonsKey][key] = new this();
        allowConstruction = false;

        return instance;
    }

    /**
     * Clears the singleton's instance from the global scope.
     */
    static clear() {
        globalScope[globalSingletonsKey] = globalScope[globalSingletonsKey] || {};

        const key = encode(this.name);

        globalScope[globalSingletonsKey][key] = null;
    }

    static get instance() {
        return this.getInstance();
    }
}

export default Singleton;
