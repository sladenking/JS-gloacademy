import Car from './car.js';

describe('Class Car', () => {
  it('getting info about car', () => {
    const mazda = new Car({ brand: 'mazda', model: 3 });
    expect(mazda.brand).toBe('mazda');
  })
})