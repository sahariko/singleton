import asSingleton from '.';
import { NO_ISTANCE_ERROR } from '../../lib/constants';

class Test {
    constructor() {
        counter++;
        this.id = VALUE;
    }

    get value() {
        return VALUE;
    }
}

const Klass = asSingleton(Test);


let counter = 0;
const VALUE = 1;

describe('asSingleton/browser', () => {
    // beforeEach(() => {
    //     Klass.clear();
    //     counter = 0;
    // });

    it('Throws an error when trying to instantiate an instance', () => {
        const construct = () => {new Klass();};

        expect(construct).toThrow(NO_ISTANCE_ERROR);
    });

    it('Generates a new instance if none exists', () => {
        Klass.getInstance();

        expect(counter).toEqual(1);
    });

    it('Generates a new instance only once', () => {
        Klass.getInstance();
        Klass.getInstance();
        Klass.getInstance();
        Klass.getInstance();

        expect(counter).toEqual(1);
    });

    it('All instances are pointers', () => {
        const a = Klass.getInstance();
        const b = Klass.getInstance();

        expect(a).toEqual(b);
    });

    it('Retains extended class properties', () => {
        const instance = Klass.getInstance();

        expect(instance.id).toEqual(VALUE);
        expect(instance.value).toEqual(VALUE);
    });

    it('Supports the pointer getter', () => {
        Klass.instance;

        expect(counter).toEqual(1);
    });

    describe('clear', () => {
        it('Flushes the global scope', () => {
            Klass.getInstance();
            Klass.clear();
            Klass.getInstance();

            expect(counter).toEqual(2);
        });
    });
});
