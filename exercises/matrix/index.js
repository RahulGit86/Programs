// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
 const res = [];
 let counter = 0;
 for(let i=0;i<n;i++){
    res.push([]);
 }
// console.log(res);
 let startCol=0,startRow=0,endCol=n-1,endRow=n-1;
 while(startCol<=endCol && startRow<= endRow){
   //Top row
   for(let i=startCol;i<=endCol;i++){
       res[startRow][i]= ++counter;
   }
  // debugger;
   //Right column
   startRow++;
   for(let i=startRow;i<=endRow;i++){
       res[i][endCol]= ++counter;
   }
   --endCol ;
   //Bottom row
   for(let i=endCol;i>=startCol;i--){
       res[endRow][i] = ++counter;
   }
   endRow--;
   //Start column
   for(let i=endRow;i>=startRow;i--){
      res[i][startCol] = ++counter;
   }
   startCol++;
   //console.log(res);
  // break;
 }
 return res;
}
//matrix(5);



module.exports = matrix;
