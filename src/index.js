/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(preferences, knowsProgramming, config) {
  let div = config[preferences];
  if (knowsProgramming === true) {
    return Math.ceil(800 / div);
  }
  else {
    return Math.ceil(1.625 * (800 / div));
  }
};
  