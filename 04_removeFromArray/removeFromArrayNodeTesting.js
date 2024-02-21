function removeFromArray(/**/) {
	var args = arguments;

	var inputArray = arguments[0];
	
	// declare the rest of the arguments with a for loop
	for (i = 0; i < (args.length - 1); i++) { 
		var removal = [];
		removal[i] = arguments[i + 1];
	}

	// remove elements using for loop to repeat if more than one entry
	for (i = 0; i < (removal.length - 1); i++) {
		const index = inputArray.indexOf(removal[i]);

		if (index > -1) {
			inputArray.splice(index, 1);
		}
	}

	return removal;

};

var test = removeFromArray([1, 2, 3, 4], 3);

return test;

