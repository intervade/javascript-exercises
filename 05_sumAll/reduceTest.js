var array = [1, 3, 5, 7, 10];

var reduced = array.reduce(function(total, amount) {
	return total + amount;
} )

console.log(reduced);
