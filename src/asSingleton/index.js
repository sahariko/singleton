import { NO_ISTANCE_ERROR, ALLOW_CONSTRUCTION } from '../../lib/constants';
import singletonize from '../singletonize';

const asSingleton = (Klass) => {
    function Singleton() {
        if (this[ALLOW_CONSTRUCTION]) {
            Object.getPrototypeOf(Singleton.prototype).constructor.call(this);
            return;
        }

        throw new Error(NO_ISTANCE_ERROR);
    }

    Singleton.prototype = Object.create(Klass.prototype);
    Singleton.className = Klass.name;

    singletonize(Singleton);

    return Object.freeze(Singleton);
};

export default asSingleton;
