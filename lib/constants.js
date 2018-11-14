/**
 * The error message thrown when trying to instantiate a Singleton.
 * @type {String}
 */
export const NO_ISTANCE_ERROR = 'Singleton classes may not have constructors';

/**
 * The global scope storage key for singleton instances;
 * @type {Symbol}
 */
export const GLOBAL_SINGLETONS = Symbol();
