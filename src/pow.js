if (!Math._pow) {
   Math._pow = (function() {
      "use strict";

      var isNaN = function(value) {
         return value !== value;
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
         if (x === undefined || y === undefined) {
            return NaN;
         }
         x = Number(x);
         y = Number(y);
         
         if (isNaN(x) || isNaN(y)) {
            return NaN;
         }
         if (this.abs(x) === Infinity || this.abs(y) === Infinity) {
            if (x < 0 || y < 0) {
               return 0;
            }
            return Infinity;
         }
         return pow.apply(this, [x, y]);
      };
   })();
}