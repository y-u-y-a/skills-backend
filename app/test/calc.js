const { isCallChain } = require('typescript')
/* eslint-disable */

class TestCalc {
  testSum(a, b) {
    return a + b
  }
}
module.exports = new TestCalc()
