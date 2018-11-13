let instance = null;

class Singleton {
  constructor() {
    if (!instance) {
      instance = this;
    }

    console.log('this:', this);
  }
}

export default Singleton;
