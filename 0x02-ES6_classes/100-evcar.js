import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  [Symbol.for('clone')]() {
    const clonedCar = new Car();
    Object.getOwnPropertyNames(this).forEach((prop) => {
      if (prop.startsWith('_')) {
        clonedCar[prop] = this[prop];
      }
    });
    return clonedCar;
  }

  cloneCar() {
    return this[Symbol.for('clone')]();
  }
}

export default EVCar;
