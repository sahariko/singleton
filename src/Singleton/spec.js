import Singleton from '.';
import { NO_ISTANCE_ERROR } from '../../lib/constants';

let counter = 0;
const VALUE = 1;
class Test extends Singleton {
    constructor() {
        super();
        counter++;
        this.id = VALUE;
    }

    get value() {
        return VALUE;
    }
}

describe('Singleton', () => {
    beforeEach(() => {
        Test.clear();
        counter = 0;
    });

    it('Throws an error when trying to instantiate an instance', () => {
        const construct = () => {new Test();};

        expect(construct).toThrow(NO_ISTANCE_ERROR);
    });

    it('Generates a new instance if none exists', () => {
        Test.getInstance();

        expect(counter).toEqual(1);
    });

    it('Generates a new instance only once', () => {
        Test.getInstance();
        Test.getInstance();
        Test.getInstance();
        Test.getInstance();

        expect(counter).toEqual(1);
    });

    it('All instances are pointers', () => {
        const a = Test.getInstance();
        const b = Test.getInstance();

        expect(a).toEqual(b);
    });

    it('Retains extended class properties', () => {
        const instance = Test.getInstance();

        expect(instance.id).toEqual(VALUE);
        expect(instance.value).toEqual(VALUE);
    });

    it('Supports the pointer getter', () => {
        Test.instance;

        expect(counter).toEqual(1);
    });

    describe('clear', () => {
        it('Flushes the global scope', () => {
            Test.getInstance();
            Test.clear();
            Test.getInstance();

            expect(counter).toEqual(2);
        });
    });
});
