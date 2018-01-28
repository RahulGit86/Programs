// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib1(n) {
	let a =0;
	let b =1,c=0;
	if(n==1)
		return 1;
	for(let i=2;i<=n;i++){
		c= a+b;
		a=b;
		b=c;
	}
	return c
}
function fib2(n){
	const arr = [0,1];
	let c=0;
	if(n==1)
		return 1;
	for(let i=2;i<=n;i++){
		c= arr[i-2]+arr[i-1];
		arr.push(c);
	}
	return arr[n];
}
function memoize(fnc){
	const cache = [];
	return function(...args){
		
		if(cache[args]){
			return cache[args];
		}
		const result =  fnc.apply(this,args);
		cache[args] = result;
		return result;
	};
}
function fib(n){
	if(n < 2)
		return n;
	else
		return fib(n-2) + fib(n-1); 	
}


 fib = memoize(fib);

module.exports = fib;
