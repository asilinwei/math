if (!Math._zeros) {
   Math._zeros = (function() {
      "use strict";

      var isNaN = function(value) {
         return value !== value;
      };

      var zeros = function(row, col) {
         var matrix = [];

         for (var i = 0, j, chunk; i < row; i += 1) {
            chunk = [];
            for (j = 0; j < col; j += 1) {
               chunk.push(0);
            }
            matrix.push(chunk);
         }
         return matrix;
      };

      return function(row, col) {
         row = Number(row);
         col = Number(col);

         if (isNaN(row) || isNaN(col) || row < 0) {
            return [];
         }
         return zeros.apply(null, [row, col]);
      };
   })();
}
