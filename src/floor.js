if (!Math._floor) {
   Math._floor = (function() {
      "use strict";

      var floor = function(number, precision) {
         var pair = (number + 'e').split('e'),
             value = this.floor(pair[0] + 'e' + (+pair[1] + precision));

         pair = (value + 'e').split('e');
         return +(pair[0] + 'e' + (pair[1] - precision));
      };

      return function(number, precision) {
         number = +number;
         precision = +precision;

         if (precision) {
            precision = (precision = this.floor(precision)) >= 0 
              ? this.min(precision, 292) 
              : this.max(precision, -292);

            return floor.call(this, number, precision);
         }
         return this.floor(number);
       };
   })();
}