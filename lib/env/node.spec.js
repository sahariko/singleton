/**
 * @jest-environment node
 */

import { browser, node, globalScope } from '.';

describe('Lib', () => {
    describe('env/node', () => {
        it('Grabs the correct scope in a node-like environment', () => {
            expect(globalScope).toEqual(global);
        });

        it('Indicates false for browser and true for node', () => {
            expect(browser).toBeFalsy();
            expect(node).toBeTruthy();
        });
    });
});
