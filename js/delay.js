// Write a delay function that matches this specification:
// var willAdd = delay( 100, calculator, 'add', [ 1, 1 ] );

// NOTE: in the spec, delay() is global and not pulled in via require()
// So we are making it an old-school global method, which must be pulled in via a script tag.

/**
 *
 * @param {Number} milliseconds
 * @param {Object} scope
 * @param {String} methodName
 * @param {Array} args
 */
function delay(milliseconds, scope, methodName, args) {
	var thePromise = new Promise(function(resolve, reject) {
		window.setTimeout(function(){
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
}

