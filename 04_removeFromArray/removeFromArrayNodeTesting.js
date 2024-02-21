function removeFromArray(/**/) {
	var args = arguments;
	var inputArray = arguments[0];
	var removal = [];
	var index = [];
	
	// declare the rest of the arguments with a for loop
	for (i = 0; i < (arguments.length - 1); i++) { 
		removal[i] = arguments[i + 1];
	}

	// remove elements using for loop to repeat if more than one entry
	for (i = 0; i < removal.length; i++) {
		console.log("first loop " + i);
		console.log(inputArray);
		for (j = 0; j < inputArray.length; j++) {
			console.log("j loop " + inputArray[j]);
			console.log("j loop " + inputArray);
			if (inputArray[j] == removal[i]) {
				inputArray.splice(j, 1);
				j = j - 1;
				console.log("if loop " + inputArray);

			}
		}
	}
	
	//console.log(arguments.length);
	//console.log(arguments[1]);
	//console.log(removal[0]);
	//console.log(removal[1]);
	console.log(inputArray);
	return inputArray;

};

var test = removeFromArray([5, 6, 6, 7, 7, 7, 8], 6, 7);

console.log("before last log");
console.log(test);

