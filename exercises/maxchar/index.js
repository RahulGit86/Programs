// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let map = {};
	let maxChar = '';
	let tmpCnt=0;
	/*for(let i=0 ;i< str.length ;i++ ){
    let cnt  = 0;
		for(let j=0 ;j< str.length ;j++ ){
			if(str[i]===str[j]){
				cnt++;
			}
		}
		if(!map[str[i]])
		map[str[i]] = cnt  ;
	}*/
	for(let char of str){   //For string & array we use of 
		if(map[char]){
			map[char]++;
		}else{
			map[char] = 1;
		}
	}
    //debugger;
	for(let key in map){   //For objects we use in instead of of
	  //console.log(key+" :"+map[key]);
	  if(tmpCnt < map[key]){
	   maxChar = key;
	   tmpCnt = map[key];
	  } 
	}
	return maxChar;
}

module.exports = maxChar;
