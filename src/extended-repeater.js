const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = '';
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    res += str;
    for (let k = 0; k < options.additionRepeatTimes; k++) {
      if (options.addition !== undefined) {
        res += String(options.addition);
      }
      if (k !== options.additionRepeatTimes - 1) {
        if (!options.additionSeparator) {
          res += '|';
        } else {
          res += options.additionSeparator;
        }
      }
    }
    if (i !== options.repeatTimes - 1) {
      if (!options.separator) {
        res += '+';
      } else {
        res += options.separator;
      }
    }
  }
    return res;
}
  

module.exports = {
  repeater
};
