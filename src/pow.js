if (!Math._pow) {
   Math._pow = (function() {
      "use strict";

      var isNaN = function(value) {
         return value !== value;
      };

      var isPositiveZero = function(num) {
         return num === 0 && 1 / num === Infinity;
      };

      var isNegativeZero = function(num) {
         return num === 0 && 1 / num === -Infinity;
      };

      var calculate = function(x, y) {
         for (var i = 0, result = 1; i < Math.abs(y); i += 1) {
            result *= x;
         }
         return result;
      };

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
               return x > 0 ? Infinity : -Infinity;
            } else if (this.abs(x) > 1 && y < 0 || this.abs(x) && this.abs(x) < 1 && y > 0) {
               return x > 0 ? 0 : -0;
            } else if (y < 0) {
               if (isPositiveZero(x)) {
                  return Infinity;
               } else if (isNegativeZero(x)) {
                  return -Infinity;
               }
            }
         }
         if (this.abs(y) === Number.MIN_VALUE) {
            return x > 0 ? 1 : NaN;
         }
         return pow.apply(this, [x, y]);
      };
   })();
}