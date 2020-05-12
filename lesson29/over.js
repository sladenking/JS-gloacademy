const over = (x, y) => {
  if (typeof x === 'number' && typeof y === 'number') {
    if (x > y) return x;
    if (x < y) return y;
    return 'equal'
  }
  if (typeof x === 'string') return 'x - string';
  if (typeof y === 'string') return 'y - string';
  return 0;
};

module.exports = over;