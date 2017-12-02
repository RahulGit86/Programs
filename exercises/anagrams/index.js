// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function removeSpecials(str) {
    var lower = str.toLowerCase();
    var upper = str.toUpperCase();

    var res = "";
    for(var i=0; i<lower.length; ++i) {
        if(lower[i] != upper[i])
            res += str[i];
    }
    return res;
}
function anagrams1(stringA, stringB) {
 let stringATmp = removeSpecials(stringA);
 let stringBTmp = removeSpecials(stringB);
 if(stringATmp.length === stringBTmp.length){
    let flag = false; 
    for(let elem of stringATmp){
      if(stringBTmp.indexOf(elem) >-1){
         flag = true;
      }else{
         flag = false;
      }
    }
    return flag;
 }else{
     return false;
 }
}
function convertToMap(str){
	let map = {};
	for(let elem of str){
		if(map[elem]){
			map[elem]++;
		}else{
			map[elem] = 1;
		}
	}
	return map;
}
function anagrams(stringA, stringB) {
	 let stringATmp = stringA.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('');
	 let stringBTmp = stringB.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('');
	 /*if(stringATmp === stringBTmp){	    
	    return true ;
	 }else{
	     return false;
	 }*/
	 return stringATmp === stringBTmp;
}
function anagrams3(stringA, stringB) {
	 let stringATmp = stringA.replace(/[^\w]/g,"").toLowerCase();
	 let stringBTmp = stringB.replace(/[^\w]/g,"").toLowerCase();
	 if(stringATmp.length === stringBTmp.length){
	    let mapA = convertToMap(stringATmp);
	    let mapB = convertToMap(stringBTmp);
	    let flag  = false;
	    for(let tmp in mapA){
	    	if(mapA[tmp] === mapB[tmp]){
	    		flag =  true;
	    	}else{
	    		flag  =  false;
	    	}
	    }
	    return flag ;
	 }else{
	     return false;
	 }
	}
function anagrams2(stringA, stringB) {
	 let stringATmp = stringA.replace(/[^\w]/g,"").toLowerCase();
	 let stringBTmp = stringB.replace(/[^\w]/g,"").toLowerCase();
	 if(stringATmp.length === stringBTmp.length){
	    let flag = false; 
	    for(let elem of stringATmp){
	      if(stringBTmp.indexOf(elem) >-1){
	         flag = true;
	      }else{
	         flag = false;
	      }
	    }
	    return flag;
	 }else{
	     return false;
	 }
	}

module.exports = anagrams;
