define([ './Calculator' ], function(Calculator) {
	// alternately use var Calculator = require('calculator');
	ScientificCalculator.prototype = new Calculator();

	function ScientificCalculator() {

	}

	Calculator.prototype.sin = function(a) {
		// expect( calculator.sin( Math.PI / 2 ) ).to.equal( 1 );
		return Math.sin(a);
	};

	Calculator.prototype.cos = function(a) {
		// expect( calculator.cos( Math.PI ) ).to.equal( -1 );
		return Math.cos(a);
	};

	Calculator.prototype.tan = function(a) {
		// expect( calculator.tan( 0 ) ).to.equal( 0 );
		return Math.tan(a);
	};

	Calculator.prototype.log = function(a) {
		// expect( calculator.log( 1 ) ).to.equal( 0 );
		return Math.log(a);
	};

	return ScientificCalculator;
});
