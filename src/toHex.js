if (!Math._toHex) {
   Math._toHex = (function() {
      "use strict";

      var toNumber = function(value) {
         var number = +value;

         return number === number ? number : 0;
      };

      var hexChar = function(num) {
         switch (num) {
            case 10:
               return 'a';
            case 11:
               return 'b';
            case 12:
               return 'c';
            case 13:
               return 'd';
            case 14:
               return 'e';
            case 15:
               return 'f';
            default:
               return '' + num;
         }
      };

      var int = function(int) {
         var result = [],
             remainder;

         while (int) {
            remainder = int % 16;
            result.unshift(hexChar(remainder));
            int -= remainder;
            int /= 16;
         }
         return result.join('');
      };

      var dec = function(dec) {
         var result = [],
             num,
             int;

         while (1) {
            num = dec * 16;
            if (!num) {
               break;
            }
            int = Math.floor(num);
            result.push(hexChar(int));
            dec = num - int;
         }
         return result.join('');
      };

      var toHex = function(num) {
         var abs = this.abs(num),
             intAbs = this.floor(abs),
             integer = int(intAbs),
             decimal = dec(abs - intAbs),
             result = integer + '.' + decimal; 

         return num >= 0 ? result : '-' + result;
      };

      return function(num) {
         if (num === undefined) {
            return '';
         }
         num = toNumber(num);
         return toHex.apply(this, [num]);
      };
   })();
}