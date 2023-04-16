const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let dflt = 1;
    let tmp;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        tmp = 1 + this.calculateDepth(arr[i]); 
      }
      if (tmp > dflt) {
        dflt = tmp;
      }
    }
    return dflt;
  }
}

module.exports = {
  DepthCalculator
};
