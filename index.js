import { globalScope } from './lib/env';
import encode from './lib/encode';

function Singleton() {
    let instance;
    const globalKey = encode(this.constructor.name);

	if (globalScope[globalKey]) {
        return globalScope[globalKey];
    } else {
		instance = this;
        globalScope[globalKey] = instance;
    }
}

export default Singleton;
