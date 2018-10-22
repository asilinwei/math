/**
 * 2018-10-22
 * @copyright 2018 LinWei
 * @author LinWei
 *
 * @description 
 * Calculate the square root of a number.
 * See (`Math.sqrt`)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt]
 *
 * @param {number} x A non-negative number.
 * @return {number} Return the square root.
 * @example
 *
 * Math._sqrt(16)
 * // => 4
 *
 * Math._sqrt('0x10')
 * // => 4
 *
 * Math._sqrt(-1)
 * // => NaN
 *
 * Math._sqrt(Infinity)
 * // => Infinity
 */

if (!Math._sqrt) {
   Math._sqrt = (function() {
      "use strict";

      var abs = function(value) {
         return value >= 0 ? value : -value;
      };

      var square = function(value) {
         return value * value;
      };

      var diff = function(sqrt, x) {
         return square(sqrt) - x;
      };

      var sqrt = function(x) {
         var sqrt = x,
            i = 0;

         while (abs(diff(sqrt, x))) {
            sqrt = (sqrt + x / sqrt) / 2;
            if (i++ > 2e+6) {
               break;
            }
         }
         return sqrt;
      };

      return function(x) {
         if (x === undefined || x < 0) {
            return NaN;
         }
         x = +x;
         return sqrt(x);
      };
   })();
}
