define(function() {
	var withExponents = function() {
		this.pow = function(base, exponent) {
			return Math.pow(base, exponent);
		};

		this.multiplyExp = function(firstPair, secondPair) {
			// Steps for Multiplying Exponents
			// Step 1 : First simplify the exponents.
			// TODO: make this handle n arguments
			var a = this.pow(firstPair[0], firstPair[1]);
			var b = this.pow(secondPair[0], secondPair[1]);
			// Step 2 : Then, multiply the resultants .
			return a * b;
		};

		this.divideExp = function(firstPair, secondPair) {
			// Steps for Dividing Exponents
			// Step 1 : Simplify the given exponent.
			var a = this.pow(firstPair[0], firstPair[1]);
			var b = this.pow(secondPair[0], secondPair[1]);
			// Step 2 : Then divide the exponents after simplified, for final
			// result.
			return a / b;
		};
	};
	return withExponents;
});