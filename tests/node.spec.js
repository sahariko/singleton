/**
 * @jest-environment node
 */

import Singleton from '..';

class Test extends Singleton {}

describe('Singleton/node', () => {
    it('Creates only one instance', () => {
        const a = new Test();
        const b = new Test();
        const c = new Test();

        expect(a).toEqual(b);
        expect(a).toEqual(c);
    });
});
