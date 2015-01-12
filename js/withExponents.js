define(
    [],
    function () {
        var withExponents = function () {
            this.pow = function (base, exponent) {
                return Math.pow(base, exponent);
            };
            // this.multiplyExp = function(firstPair, secondPair) {
            // // Steps for Multiplying Exponents
            // // Step 1 : First simplify the exponents.
            // // TODO: make this handle n arguments
            // var a = this.pow(firstPair[0], firstPair[1]);
            // var b = this.pow(secondPair[0], secondPair[1]);
            // // Step 2 : Then, multiply the resultants .
            // return a * b;
            // };
            //
            // this.divideExp = function(firstPair, secondPair) {
            // // Steps for Dividing Exponents
            // // Step 1 : Simplify the given exponent.
            // var a = this.pow(firstPair[0], firstPair[1]);
            // var b = this.pow(secondPair[0], secondPair[1]);
            // // Step 2 : Then divide the exponents after simplified, for
            // final
            // // result.
            // return a / b;
            // };
            this.multiplyExp = function () {
                var previousPowerOfPair = 1.0;
                for (var index = 0; index < arguments.length; index++) {
                    var pair = arguments[index];
                    if (typeof pair === 'object' && pair.length === 2) {
                        // Steps for Multiplying Exponents
                        // Step 1 : First simplify the exponents.
                        var powerOfPair = this.pow(pair[0], pair[1]);
                        // Step 2 : Then, multiply the resultants.
                        previousPowerOfPair = powerOfPair * previousPowerOfPair;
                    } else {
                        throw (new Error(
                            'withExponents.multiplyExp() failed with invalid arguments: ' + String(pair)));
                    }
                }
                return previousPowerOfPair;
            };
            this.divideExp = function () {
                var previousPowerOfPair = 1.0;
                for (var index = 0; index < arguments.length; index++) {
                    var pair = arguments[index];
                    if (typeof pair === 'object' && pair.length === 2) {
                        // Steps for Dividing Exponents
                        // Step 1 : Simplify the given exponent.
                        var powerOfPair = this.pow(pair[0], pair[1]);
                        // Step 2 : Then divide the exponents after
                        // simplified, for final
                        // result.
                        if (index>0){
                            previousPowerOfPair = previousPowerOfPair / powerOfPair;
                        }
                        else{
                            previousPowerOfPair = powerOfPair;
                        }
                    } else {
                        throw (new Error(
                            'withExponents.divideExp() failed with invalid arguments: ' + String(pair)));
                    }
                }
                return previousPowerOfPair;
            };
        };
        return withExponents;
    });