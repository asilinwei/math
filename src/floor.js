if (!Math._floor) {
   Math._floor = (function() {
      "use strict";

      var size = function(string) {
         return string.length;
      };

      var isNaN = function(value) {
         return value !== value;
      };

      var floor = function(num) {
         var string = String(num),
            result = '',
            i = 0,
            char;

         while ((char = string[i]) !== '.') {
            result += char;
            i++;
         }
         result = Number(result);
         return num >= 0 ? result : result - 1;
      };

      return function(num) {
         num = Number(num);
         if (isNaN(num) || Number.isInteger(num) || this.abs(num) === Infinity) {
            return num;
         }
         if (this.abs(num) < 1) {
            return num > 0 ? 0 : -1;
         }
         return floor.apply(null, [num]);
      };
   })();
}
