const sumAll = function(firstNumber, secondNumber) {

	if ((typeof(firstNumber) != "number") || (typeof(secondNumber) != "number") || (firstNumber < 0) || (secondNumber < 0)) {
		return "ERROR";
	}

	else {
		var totalList = [];
		// swap variable values if first is bigger
		if (firstNumber > secondNumber) {
			var placeholder = firstNumber;
			firstNumber = secondNumber;
			secondNumber = placeholder;
		}
		var difference = secondNumber - firstNumber;
		var listSum = [];

		for (i = 0; i <= difference; i++) {
			totalList[i] = firstNumber + i;
		}

		listSum = totalList.reduce(function(total, amount) {
			return total + amount;
		} )

		return listSum;
	}

};

// Do not edit below this line
module.exports = sumAll;
