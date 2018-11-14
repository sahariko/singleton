/**
 * @jest-environment node
 */

import asSingleton from '.';

class Test {}
const Klass = asSingleton(Test);

describe('asSingleton/browser', () => {
    it('Creates only one instance', () => {
        const a = new Klass();
        const b = new Klass();
        const c = new Klass();

        expect(a).toEqual(b);
        expect(a).toEqual(c);
    });
});
