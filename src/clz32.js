if (!Math._clz32) {
   Math._clz32 = (function() {
      "use strict";

      var size = function(string) {
         return string.length;
      };

      var binary = function(num) {
         var binary = '',
            remain;

         while (num) {
            remain = num % 2;
            binary = remain + binary;
            num -= remain;
            num /= 2;
         }
         return binary;
      };

      var clz32 = function(num) {
         var seq = binary(num);

         return 32 - size(seq);
      };

      return function(num) {
         num = this.floor(num);
         if (this.abs(num) === Infinity || !num) {
            return 32;
         }
         if (num < 0) {
            return 0;
         }
         return clz32.apply(null, [num]);
      };
   })();
}