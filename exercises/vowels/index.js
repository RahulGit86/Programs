// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const matcher = str.match(/[aeiou]/gi);
	return matcher ? matcher.length :0;
}
function vowels3(str) {
	 let cnt  = 0;
	 let tmp  = ['a','e','i','o','u'];
	 for(let char of str.toLowerCase()){
		 if(tmp.includes(char)){
			 cnt++;
		 }
	 } 
	  return cnt;
	}
function vowels2(str) {
	 let cnt  = 0;
	 str =  str.toLowerCase();
	   if(str.indexOf('a')>-1 ){
	     cnt++;
	   }if(str.indexOf('e')>-1 ){
	     cnt++;
	   }if(str.indexOf('i')>-1 ){
	     cnt++;
	   }if(str.indexOf('o')>-1 ){
	     cnt++;
	   }if(str.indexOf('u')>-1 ){
	     cnt++;
	   }

	  return cnt;
	}
function vowels1(str) {
	 let cnt  = 0;
	  for(let char of str.toLowerCase()){
	   if(char ==='a' ||char ==='e' ||char ==='i' ||char ==='o' ||char ==='u'  ){
	     cnt++;
	   }
	  }
	  return cnt;
	}

module.exports = vowels;
