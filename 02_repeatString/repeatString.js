const repeatString = function(textInput, repeatAmount) {

	var totalString = "";

	if (repeatAmount >= 0) {
		for (i = 1; i <= repeatAmount; i++) {
			totalString = totalString + textInput;
		}
		return totalString;
	}
	else {
		return "ERROR";
	}

};

// Do not edit below this line
module.exports = repeatString;
