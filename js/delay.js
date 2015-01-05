//Write a delay function that matches this specification:
//var willAdd = delay( 100, calculator, 'add', [ 1, 1 ] );

//NOTE: in the spec, delay() is global and not pulled in via require()
// Assume there's some injection in the test and we use AMD.
define(function() {
	/**
	 *
	 * @param {Number} milliseconds
	 * @param {Object} scope
	 * @param {String} methodName
	 * @param {Array} args
	 */
	var delay = function (milliseconds, scope, methodName, args) {
		var thePromise = new Promise(function(resolve, reject) {
			setTimeout(function(){
				try{
					var method = scope[methodName];
					var result = method.apply(scope, args);
					resolve(result);
				}
				catch(error){
					error.scope = scope;
					error.methodName = methodName;
					error.args = args;
					reject(error);
				}
			}, milliseconds);
		});
		return thePromise;
	};

	return delay;
});
