/**
 * 2018-10-24
 * @copyright 2018 LinWei
 * @author LinWei
 *
 * @description 
 * Convert a number to hexadecimal sequence.
 *
 * @param {number} num The number to be converted.
 * @return {string} Return the hexadecimal sequence.
 * @example
 *
 * Math._toHex(64)
 * // => '40'
 *
 * Math._toHex(NaN)
 * // => '0'
 */

if (!Math._toHex) {
   Math._toHex = (function() {
      "use strict";

      var toNumber = function(value) {
         var number = +value;

         return number === number ? number : 0;
      };

      var toString = function(value) {
         return '' + value;
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

      // Integer part.
      var int = function(int) {
         var result = [],
             remainder;

         if (!int) {
            return toString(int);
         }
         while (int) {
            remainder = int % 16;
            result.unshift(hexChar(remainder));
            int -= remainder;
            int /= 16;
         }
         return result.join('');
      };

      // Decimal part.
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
         return '.' + result.join('');
      };

      var toHex = function(num) {
         var abs = this.abs(num),
             intAbs = this.floor(abs),
             integer = int(intAbs),
             decimal = dec(abs - intAbs),
             result = Number.isInteger(num) ? integer : integer + decimal;

         return num >= 0 ? result : '-' + result;
      };

      return function(num) {
         if (num === undefined) {
            return '';
         }
         num = toNumber(num);
         if (this.abs(num) === Infinity) {
            return toString(num);
         }
         return toHex.apply(this, [num]);
      };
   })();
}