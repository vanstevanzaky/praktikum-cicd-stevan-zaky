const { greet } = require('./index');

test('greet function should return correct greeting', () => {
  const result = greet('World');
  expect(result).toBe('Hello, World! Welcome to WRONG TEXT!');
});

test('greet function should handle custom names', () => {
  const result = greet('Stevan');
  expect(result).toBe('Hello, Stevan! Welcome to the CI/CD Pipeline!');
});
