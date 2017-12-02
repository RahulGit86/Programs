// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
function reverse(str) {
	debugger;   //node inspect index.js
	return str.split('').reduce((rever, char) =>  char + rever ,''); //reduce function :called on each array value   & two arguments: first-> function logic , second-> intial value
}
function reverse4(str) {
	return str.split('').reduce((rever, char) => {return char + rever;} ,''); //reduce function :called on each array value   & two arguments: first-> function logic , second-> intial value
}
function reverse3(str) {
	let tmp = '';
	for(let i of str){
		tmp =  i + tmp;
	}
	return tmp;
}
function reverse2(str) {
	/*const arr = str.split(''); // convert to array
	arr.reverse();
	return arr.join('');*/ // convert from array to string again
	return str.split('').reverse().join('');
}
function reverse1(str) {
	let tmp = '';
	for(let i=str.length-1;i>=0 ;i--){
		//tmp +=str.charAt(i);
		tmp =tmp.concat(str.charAt(i));
	}
	return tmp;
}
reverse('abcd');
module.exports = reverse;
