// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	return str.split('').every((val,index) => {    //if all values are true then every function of array will return true otherwise false
		return val === str[str.length - index -1] ;
	});
}
function palindrome1(str) {
	/*if(str == reverse(str))
		return true;
	else
		return false;*/
	return str === reverse(str);
}
	function reverse(str){
		let tmp = '';
		for(let char of str){
			tmp = char + tmp;
		}
		return tmp;
	}
module.exports = palindrome;
