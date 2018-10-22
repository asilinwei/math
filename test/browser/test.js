/**
 * @fileOverview Unit Testing in browser
 * @author LinWei
 * 2018-10-22
 */

var should = chai.should();

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