// const range = function(start, end, step) {
//   let array = [];
//   for (let i = start; i <= end; i + step){
//     array.push[i];
//   }
//   return array;
// }

// console.log(range(0,10,2));


//in for loop, if it increase by some number, it should be ' i += num'
const range = function(start, end, step) {
  let arr = [];
  if ((start === undefined) || (end === undefined) || (step === undefined) || (step <= 0) || (start > end)){
    return arr;
  } else {
    for (let i = start; i <= end; i += step){
      arr.push(i)
    }
    return arr;
  } 
} 

console.log(range(0,10,2));

