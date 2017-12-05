// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


function pyramid(n, midPoint = 0,row=0,cnt=0){
if(midPoint === 0){
   midPoint  = Math.floor((n*2 -1)/2);
   cnt =n;
 }
 debugger;
 if(n===0){
   return;
 }else{
   let tmp  = '';
   for(let col=0;col<2*cnt-1;col++ ){
     if(col>=midPoint-row && col <=midPoint +row){
       tmp+="#";
     }else{
       tmp+=" ";
     }
   }
   console.log(tmp);
   pyramid(n-1,midPoint,row+1,cnt);
 }

}
function pyramid1(n) {
 const midPoint = Math.floor((2*n -1) /2);
 for(let i=0;i<n;i++){
   let tmp  ='';
   for(let j=0;j<n*2-1;j++){  
   if(midPoint-i<=j &&midPoint+i>=j ){     
       tmp+="#";
    }else{
       tmp+=" ";
    }   
   }
   console.log(tmp);
 }
}

module.exports = pyramid;
