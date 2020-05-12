export default class Car {
  constructor(option) {
    const { brand, model } = option;
    this.brand = brand;
    this.model = model;
  }

  getInfo() {
    return this.brand + ' ' + this.model
  }
}