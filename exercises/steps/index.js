// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function steps(n,m=n, row=0){
  if(n===0){
      return ;
  }
  //debugger;
  printStep(n,m,row);
  steps(n-1,m,row+1);  
}
function printStep(n,m,step){  
    let tmp = '';
    for(let j=0;j<m;j++){
     if(j<=step){
       tmp+="#";
     }else{
       tmp+=" ";
     } 
  }
  console.log(tmp);
}
function steps2(n) {
 for(let i=0;i<n;i++){
   let tmp  = '';
   for(let j=0;j<n;j++){
      if(j<=i){
    	  tmp+="#";
      }else{
    	  tmp+=" ";
      }
   }
   console.log(tmp);
 }
}
function steps1(n) {
	 for(let i=0;i<n;i++){
	   let tmp  = '';
	   for(let j=0;j<=i;j++){
	     tmp+= "#";
	   }
	   for(let k=tmp.length;k<n;k++){
		     tmp+= " ";
	   }
	   console.log(tmp);
	 }
	}
module.exports = steps;
