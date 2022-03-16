let concat = function(arrOne, arrTwo) {
  let newArrOne ;
  for (let i = 0; i < arrTwo.length; i++){
    newArrOne = arrOne.push(arrTwo[i]);
  }
  return arrOne;
}