// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	/*const tmp = 0;
	while(n>0){
	tmp = tmp*10 +	n%10;
	n = n/10;
	}*/
  debugger;
	let str = (Math.abs(n)).toString();
	let tmp = str.split('').reverse().join('');
	let num = Number(tmp);
	//if(Math.sign(n)==-1)
		//num = -num;
	return num * Math.sign(n);
	
	
}


module.exports = reverseInt;
