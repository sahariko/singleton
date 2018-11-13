import Singleton from '.';

class Test extends Singleton {
    constructor(id) {
        super();
        this.id = id;
    }
}

describe('Singleton', () => {
    it('test', () => {
        const a = new Test(1);
        const b = new Test(2);

        console.log(a, a.id);
        console.log(b, b.id);
    });
});
