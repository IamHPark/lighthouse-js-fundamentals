  const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

  const finalPosition = function (moves) {

  let currentPosition = [];
  let left = 0;
  let right = 0;

  for ( let move of moves) {
    if (move === 'east'){
      left = left + 1;
    } else if ( move === 'west'){
      left = left - 1;
    } else if ( move === 'north') {
      right = right + 1;
    } else if (move === 'south') {
      right = right - 1;
    }
  } 
  currentPosition.push(left);
  currentPosition.push(right);
  return currentPosition;
}

console.log(finalPosition(moves));