/**
 * @module lib/env
 * @since 0.0.1
 * @description A collection of environment utilities and indicators.
 */

const WINDOW = 'window';
const GLOBAL = 'global';

/**
 * Fetches the global scope.
 * Checks for either "global" or "scope".
 * @return {Object}
 */
const getGlobalScope = () => {
    if (typeof global === 'object') {
        return global;
    }

    if (typeof window === 'object') {
        return window;
    }

    throw new Error('Couldn\'t fetch the global scope');
};

/**
 * The global scope, can be either "global" or "window".
 * @type {Object}
 */
export const globalScope = getGlobalScope();

const checkGlobalObject = (globalObject) => new Function(`try {return this===${globalObject};}catch(e){ return false;}`)();

/**
 * Whether the current enironment is a node-like environment.
 * @type {Boolean}
 */
export const node = checkGlobalObject(GLOBAL);

/**
 * Whether the current enironment is a browser environment.
 * @type {Boolean}
 */
export const browser = checkGlobalObject(WINDOW);
