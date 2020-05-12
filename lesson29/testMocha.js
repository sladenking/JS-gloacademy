const assert = require('chai').assert;
const expect = require('chai').expect;
const over = require('./over');

describe('function Over', () => {
  it('must return max number', () => {
    assert(over(3, 6) === 6);
    assert(over(103, 66) === 103);
    assert(over(8, 5) !== 5);
    assert(over(true, {}) === 0);
  })
  it('waiting string if argument - string', () => {
    expect(over('hi', 10)).equal('x - string');
    expect(over(1, 'escape')).equal('y - string')
    expect(over('one', 'two')).equal('x - string')
  })
})