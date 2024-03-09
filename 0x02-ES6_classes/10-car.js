const cloneSymbol = Symbol("clone");

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  [cloneSymbol]() {
    const clonedCar = new this.constructor();
    Object.getOwnPropertyNames(this).forEach((prop) => {
      if (prop.startsWith("_")) {
        clonedCar[prop] = this[prop];
      }
    });
    return clonedCar;
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}

export default Car;
