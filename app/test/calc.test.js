/* eslint-disable */
const calc = require('./calc')

test('adds 1 + 2 to equal 3', () => {
  expect(calc.testSum(1, 2)).toBe(3)
})
