const { Circle, Triangle, Square } = require('./shapes');

describe('Shape rendering', () => {
  test('Circle should render correctly', () => {
    const circle = new Circle('blue');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });

  test('Triangle should render correctly', () => {
    const triangle = new Triangle('blue');
    expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });

  test('Square should render correctly', () => {
    const square = new Square('blue');
    expect(square.render()).toEqual('<rect x="50" y="20" width="200" height="200" fill="blue" />');
  });
});
