// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
 let arr = [];
 for(let i=0;i<array.length;i=i+size){
	 let tmp =  array.slice(i,i+size);
     arr.push(tmp);
 }
 return arr;
}
function chunk2(array, size) {
	 let arr = [];
	 for(let elem of array){
		 const last = arr[arr.length -1];
		 if(!last || last.length ===size){
			 arr.push([elem]);
		 }else{
			 last.push(elem);
		 }
	 }
	 return arr;
	}
function chunk1(array, size) {
	 let arr = [];
	 for(let i=0;i<array.length;i=i+size){
	   let tmp =[];
	   for(let j=i;j<i+size && j<array.length ;j++){
	      tmp.push(array[j]);
	    }
	    arr.push(tmp);
	  }
	  return arr;
	}

module.exports = chunk;
