/**
 * @fileOverview Unit Testing in browser
 * @author LinWei
 * 2018-10-24
 */

var should = chai.should();

// Test Math._sqrt
describe('Math._sqrt', function() {
   it('should return NaN when the argument is negative', function() {
      Math._sqrt(-1).should.be.NaN;
   });

   it('should return NaN when the argument is undefined', function() {
      Math._sqrt().should.be.NaN;
   });

   it('should return NaN when the argument can not be converted to number', function() {
      Math._sqrt('a').should.be.NaN;
      Math._sqrt({
         'a': 12
      })
      .should
      .be
      .NaN;
   });

   it('should return NaN when the argument is NaN', function() {
      Math._sqrt(NaN).should.be.NaN;
   });

   it('should return 4 when the argument is 16', function() {
      should.equal(Math._sqrt(16), 4);
   });

   it('should return square root when the argument can be converted to number', function() {
      should.equal(Math._sqrt('16'), 4);
      should.equal(Math._sqrt({
         valueOf: function() {
            return 16;
         }
      }), 4);
      should.equal(Math._sqrt('0x10'), 4);
   });

   it('should return 2.25 when the argument is 5.0625', function() {
      should.equal(Math._sqrt(5.0625), 2.25);
   });

   it('should return 0 when the argument is 0', function() {
      should.equal(Math._sqrt(0), 0);
   });

   it('should return 0 when the argument is null', function() {
      should.equal(Math._sqrt(null), 0);
   });

   it('should return 0 when the argument is \'\'', function() {
      should.equal(Math._sqrt(''), 0);
   });

   it('should return 0 when the argument is false', function() {
      should.equal(Math._sqrt(false), 0);
   });

   it('should return 1 when the argument is true', function() {
      should.equal(Math._sqrt(true), 1);
   });

   it('should return Infinity when the argument is Inifnity', function() {
      should.equal(Math._sqrt(Infinity), Infinity);
   });

   it('when the argument is not perfect square between 0 and 100', function() {
      for (var i = 0; i <= 100; i += 1) {
         if (!Number.isInteger(Math.sqrt(i))) {
            Math._sqrt(i).should.be.approximately(Math.sqrt(i), 1e-14);
         }
      }
   });
});

// Test Math._toHex
describe('Math._toHex', function() {
   it('should return \'0\' when the argument is NaN', function() {
      should.equal(Math._toHex(NaN), '0');
   });

   it('should return \'0\' when the argument is 0', function() {
      should.equal(Math._toHex(0), '0');
   });

   it('should return \'0\' when the argument is null', function() {
      should.equal(Math._toHex(null), '0');
   });

   it('should return \'0\' when the argument is false', function() {
      should.equal(Math._toHex(false), '0');
   });

   it('should return \'0\' when the argument is \'\'', function() {
      should.equal(Math._toHex(''), '0');
   });

   it('should return \'\' when the argument is undefined', function() {
      should.equal(Math._toHex(), '');
   });

   it('should return \'1\' when the argument is true', function() {
      should.equal(Math._toHex(true), '1');
   });

   it('should return hexadecimal sequence when the argument can be converted to number', function() {
      should.equal(Math._toHex('12'), 12..toString(16));
      should.equal(Math._toHex('12.453'), 12.453.toString(16));
   });

   it('should return \'0\' when the argument can not be converted to number', function() {
      should.equal(Math._toHex({
         a: 12
      }), '0');
   });

   it('should return hexadecimal sequence when the argument is number', function() {
      for (var i = -10; i <= 10; i += 1e-3) {
         should.equal(Math._toHex(i), (i).toString(16));
      }
      should.equal(Math._toHex(2 / 3), (2 / 3).toString(16));
      should.equal(Math._toHex(13 / 6), (13 / 6).toString(16));
      should.equal(Math._toHex(10 / 3), (10 / 3).toString(16));
   });

   it('should return \'Infinity\' when the argument is Infinity', function() {
      should.equal(Math._toHex(Infinity), Infinity.toString(16));
   });

   it('should return \'-Infinity\' when the argument is -Infinity', function(){
      should.equal(Math._toHex(-Infinity), (-Infinity).toString(16));
   });
});

// Test Math._pow
describe('Math._pow', function() {

   it('should return Infinity when the base is Infinity, the exponent is positive number', function() {
      should.equal(Math._pow(Infinity, 2), Infinity);
      should.equal(Math._pow(Infinity, 1 / 3), Infinity);
      should.equal(Math._pow(Infinity, 2.34), Infinity);
      should.equal(Math._pow(Infinity, Number.MIN_VALUE), Infinity);
      should.equal(Math._pow(Infinity, Number.MAX_VALUE), Infinity);
      should.equal(Math._pow(Infinity, Number.MAX_SAFE_INTEGER), Infinity);
      should.equal(Math._pow(Infinity, Infinity), Infinity);
   });

   it('should return zero when the base is Infinity, the exponent is negative number', function() {
      should.equal(Math._pow(Infinity, -2), 0);
      should.equal(Math._pow(Infinity, -1 / 3), 0);
      should.equal(Math._pow(Infinity, -2.34), 0);
      should.equal(Math._pow(Infinity, -Number.MIN_VALUE), 0);
      should.equal(Math._pow(Infinity, -Number.MAX_VALUE), 0);
      should.equal(Math._pow(Infinity, Number.MIN_SAFE_INTEGER), 0);
      should.equal(Math._pow(Infinity, -Infinity), 0);
   });

   it('should return Infinity when the absolute value of the base is >= 1, the exponent is Infinity', function() {
      should.equal(Math._pow(1, Infinity), Infinity);
      should.equal(Math._pow(-1, Infinity), Infinity);
      should.equal(Math._pow(1.34, Infinity), Infinity);
      should.equal(Math._pow(-1.34, Infinity), Infinity);
      should.equal(Math._pow(2, Infinity), Infinity);
      should.equal(Math._pow(-2, Infinity), Infinity);
      should.equal(Math._pow(Number.MAX_VALUE, Infinity), Infinity);
      should.equal(Math._pow(-Number.MAX_VALUE, Infinity), Infinity);
      should.equal(Math._pow(Number.MAX_SAFE_INTEGER, Infinity), Infinity);
      should.equal(Math._pow(-Number.MAX_SAFE_INTEGER, Infinity), Infinity);
      should.equal(Math._pow(Infinity, Infinity), Infinity);
      should.equal(Math._pow(-Infinity, Infinity), Infinity);
   });

   it('should return zero when the absolute value of the base is < 1, the exponent is Infinity', function() {
      should.equal(Math._pow(1 / 3, Infinity), 0);
      should.equal(Math._pow(-1 / 3, Infinity), 0);
      should.equal(Math._pow(Number.MIN_VALUE, Infinity), 0);
      should.equal(Math._pow(-Number.MIN_VALUE, Infinity), 0);
      should.equal(Math._pow(0.64, Infinity), 0);
      should.equal(Math._pow(-0.64, Infinity), 0);
   });

   it('should return NaN when the base or the exponent can not be converted to number', function() {
      Math._pow('a', 2).should.be.NaN;
      Math._pow(2, 'a').should.be.NaN;
      Math._pow(2).should.be.NaN;
      Math._pow().should.be.NaN;
   });

   it('should return number when the base and the exponent can be converted to number', function() {
      should.equal(Math._pow('2', '3'), 8);
   });

   it('should return NaN when the base is -2.34, the exponent is -2.34 or 2.34', function() {
      Math._pow(-2.34, -2.34).should.be.NaN;
      Math._pow(-2.34, 2.34).should.be.NaN;
   });

   it('should return the result of calling Math.pow', function() {
      should.equal(Math._pow(2.34, -2.34), Math.pow(2.34, -2.34));
      should.equal(Math._pow(2.34, 2.34), Math.pow(2.34, 2.34));
      should.equal(Math._pow(0.34, -0.34), Math.pow(0.34, -0.34));
      should.equal(Math._pow(0.34, 0.34), Math.pow(0.34, 0.34));
      should.equal(Math._pow(2, 3), Math.pow(2, 3));
      should.equal(Math._pow(-2, 3), Math.pow(-2, 3));
      should.equal(Math._pow(2, -3), Math.pow(2, -3));
      should.equal(Math._pow(-2, -3), Math.pow(-2, -3));
      should.equal(Math._pow(0, 0), Math.pow(0, 0));
      should.equal(Math._pow(0, 1), Math.pow(0, 1));
      should.equal(Math._pow(0, -1), Math.pow(0, -1));
      should.equal(Math._pow(1, 0), Math.pow(1, 0));
      should.equal(Math._pow(-1, 0), Math.pow(-1, 0));
      should.equal(Math._pow(Number.MIN_VALUE, 0), Math.pow(Number.MIN_VALUE, 0));
      should.equal(Math._pow(-Number.MIN_VALUE, 0), Math.pow(-Number.MIN_VALUE, 0));
      should.equal(Math._pow(0, Number.MIN_VALUE), Math.pow(0, Number.MIN_VALUE));
      should.equal(Math._pow(Number.MIN_VALUE, 2), Math.pow(Number.MIN_VALUE, 2));
      should.equal(Math._pow(-Number.MIN_VALUE, 2), Math.pow(-Number.MIN_VALUE, 2));
      should.equal(Math._pow(2, Number.MIN_VALUE), Math.pow(2, Number.MIN_VALUE));
      should.equal(Math._pow(Number.MIN_VALUE, -2), Math.pow(Number.MIN_VALUE, -2));
      should.equal(Math._pow(-Number.MIN_VALUE, -2), Math.pow(-Number.MIN_VALUE, -2));
      should.equal(Math._pow(0, Number.MAX_VALUE), Math.pow(0, Number.MAX_VALUE));
      should.equal(Math._pow(Number.MAX_VALUE, 0), Math.pow(Number.MAX_VALUE, 0));
      should.equal(Math._pow(-Number.MAX_VALUE, 0), Math.pow(-Number.MAX_VALUE, 0));
      should.equal(Math._pow(2, Number.MAX_VALUE), Math.pow(2, Number.MAX_VALUE));
      should.equal(Math._pow(Number.MAX_VALUE, 2), Math.pow(Number.MAX_VALUE, 2));
      should.equal(Math._pow(-Number.MAX_VALUE, 2), Math.pow(-Number.MAX_VALUE, 2));
      should.equal(Math._pow(-2, Number.MAX_VALUE), Math.pow(-2, Number.MAX_VALUE));
      should.equal(Math._pow(Number.MAX_VALUE, -2), Math.pow(Number.MAX_VALUE, -2));
      should.equal(Math._pow(-Number.MAX_VALUE, -2), Math.pow(-Number.MAX_VALUE, -2));
      should.equal(Math._pow(0, Number.MAX_SAFE_INTEGER), Math.pow(0, Number.MAX_SAFE_INTEGER));
      should.equal(Math._pow(Number.MAX_SAFE_INTEGER, 0), Math.pow(Number.MAX_SAFE_INTEGER, 0));
      should.equal(Math._pow(-Number.MAX_SAFE_INTEGER, 0), Math.pow(-Number.MAX_SAFE_INTEGER, 0));
      should.equal(Math._pow(2, Number.MAX_SAFE_INTEGER), Math.pow(2, Number.MAX_SAFE_INTEGER));
      should.equal(Math._pow(Number.MAX_SAFE_INTEGER, 2), Math.pow(Number.MAX_SAFE_INTEGER, 2));
      should.equal(Math._pow(-Number.MAX_SAFE_INTEGER, 2), Math.pow(-Number.MAX_SAFE_INTEGER, 2));
      should.equal(Math._pow(-2, Number.MAX_SAFE_INTEGER), Math.pow(-2, Number.MAX_SAFE_INTEGER));
      should.equal(Math._pow(Number.MAX_SAFE_INTEGER, -2), Math.pow(Number.MAX_SAFE_INTEGER, -2));
      should.equal(Math._pow(-Number.MAX_SAFE_INTEGER, -2), Math.pow(-Number.MAX_SAFE_INTEGER, -2));
   });

   it('should return NaN when the base is negative number, the exponent is Number.MIN_VALUE', function() {
      Math._pow(-2, Number.MIN_VALUE).should.be.NaN;
      Math._pow(-1 / 3, Number.MIN_VALUE).should.be.NaN;
      Math._pow(-2.34, Number.MIN_VALUE).should.be.NaN;
   });
});

console.log(Math._pow(-Infinity,Number.MAX_SAFE_INTEGER));