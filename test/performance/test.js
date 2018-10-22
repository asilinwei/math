/**
 * @fileOverview Performance Testing
 * @author LinWei
 * 2018-10-22
 */

var suite = new Benchmark.Suite;

suite.add('Math._sqrt', function() {
	Math._sqrt(80);
})
.add('Math.sqrt', function() {
	Math.sqrt(80);
})
.on('cycle', function(event) {
	console.log(String(event.target));
})
.on('complete', function() {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });