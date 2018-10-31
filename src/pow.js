/**
 * 2018-10-31
 * @copyright 2018 LinWei
 * @author LinWei
 *
 * @description 
 * Return the base to the exponent power. 
 * See (`Math.pow`)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow].
 * 
 * @param {number} x The base number.
 * @param {number} y The exponent used to raise the base.  
 * @return {number} A number representing the given base taken to the power of the given exponent.
 * @example
 *
 * Math._pow(2, 3)
 * // => 8 
 *
 * Math._pow(4, 0.5)
 * // => 2
 */

if (!Math._pow) {
   Math._pow = (function() {
      "use strict";

      // Check if it is NaN.
      var isNaN = function(value) {
         return value !== value;
      };

      var calculate = function(x, y) {
         for (var i = 0, result = 1; i < Math.abs(y); i += 1) {
            result *= x;
         }
         return result;
      };

      // Convert to integer.
      var toInt = function(num) {
         var str = String(num),
            int = '',
            i = 0;

         while (str[i] !== '.') {
            int += str[i];
            i++;
         }
         return Number(int);
      };

      var pow = function(x, y) {
         if (!Number.isInteger(y)) {
            var diff = y - toInt(y),
                int = toInt(y),
                cal = calculate(x, int),
                exp = this.exp(diff * this.log(x)),
                result = y > 0 ? cal * exp : cal / exp;      
         } else {
            result = calculate(x, y);
         }
         return y >= 0 ? result : 1 / result;
      };

      return function(x, y) {
         x = Number(x);
         y = Number(y);
              
         if (isNaN(x) || isNaN(y)) {
            return NaN;
         }
         if (this.abs(x) === Infinity && this.abs(y) < Number.MAX_SAFE_INTEGER) {
            if (y > 0) {
               return Infinity;
            } else if (y < 0) {
               return 0;
            }
         }
         if (this.abs(y) === Infinity) {
            if (y > 0) {
               return this.abs(x) < 1 ? 0 : Infinity;
            } else {
               return this.abs(x) < 1 ? Infinity : 0;
            }
         }
         if (this.abs(y) >= Number.MAX_SAFE_INTEGER) {
            if (this.abs(x) === 1 || x === 0 && y > 0) {
               return x;
            } else if (this.abs(x) > 1 && y > 0 || this.abs(x) && this.abs(x) < 1 && y < 0) {
               return x < 0 && y % 2 ? -Infinity : Infinity;
            } else if (this.abs(x) > 1 && y < 0 || this.abs(x) && this.abs(x) < 1 && y > 0) {
               return x < 0 && y % 2 ? -0 : 0;
            } else if (x === 0 && y < 0) {
               return y % 2 ? 1 / x : -1 / x;
            }
         }
         if (this.abs(y) === Number.MIN_VALUE) {
            if (x > 0) {
               return 1;
            } else if (x < 0) {
               return NaN;
            } else {
               return 0;
            }
         }
         return pow.apply(this, [x, y]);
      };
   })();
}