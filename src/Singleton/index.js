import { NO_ISTANCE_ERROR, ALLOW_CONSTRUCTION } from '../../lib/constants';
import singletonize from '../singletonize';

/**
 * @class Singleton
 * @classdesc A truly global, isomorphoic, singleton.
 * @property {Object} instance Gets the singleton's instance, an alias for getInstance().
 */
class Singleton {
    constructor() {
        if (this[ALLOW_CONSTRUCTION]) return;
        throw new Error(NO_ISTANCE_ERROR);
    }

    static get className() {
        return this.name;
    }
}

singletonize(Singleton);

export default Singleton;
