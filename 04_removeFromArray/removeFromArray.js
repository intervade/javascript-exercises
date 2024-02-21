const removeFromArray = function(/**/) {
	var args = arguments;
	var inputArray = arguments[0];
	var removal = [];
	
	// declare the rest of the arguments with a for loop
	for (i = 0; i < (arguments.length - 1); i++) { 
		removal[i] = arguments[i + 1];
	}

	// remove elements using for loop to repeat if more than one entry
	for (i = 0; i < removal.length; i++) {      
                for (j = 0; j < inputArray.length; j++) {
                        if ((inputArray[j] == removal[i]) && (typeof(inputArray[j]) == typeof(removal[i]))) { 
                                inputArray.splice(j, 1);  
                                j = j - 1;
                        }        
                }
        }

	return inputArray;

};

// Do not edit below this line
module.exports = removeFromArray;
