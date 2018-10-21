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

      var floor = function(num) {
         var string = '' + num,
             i = 0,
             str = '';

         while (string[i] !== '.') {
            str += string[i];
            i++;
            if (!string[i]) {
               break;
            }
         }    
         return +str;
      };

      var sqrt = function(x) {
         var dev = 1e-14,
            sqrt = x;

         while (abs(diff(sqrt, x)) > dev) {
            sqrt = (sqrt + x / sqrt) / 2;
         }
         if (square(floor(sqrt)) === x) {
            sqrt = floor(sqrt);
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
