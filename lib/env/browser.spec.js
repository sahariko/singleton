import { browser, node, globalScope } from '.';

describe('Lib', () => {
    describe('env/browser', () => {
        it('Grabs the correct scope in a browser environment', () => {
            expect(globalScope).toEqual(window);
        });

        it('Indicates true for browser and false for node', () => {
            expect(browser).toBeTruthy();
            expect(node).toBeFalsy();
        });
    });
});
