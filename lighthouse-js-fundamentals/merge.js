const merge = function ( arr1 , arr2 ) {
  //merge two arrays 
  //sort array according to numbers 
  let newArr = [];
  for ( let i = 0; i < arr2.length; i++ ){
    arr1.push(arr2[i]);
  }
  arr1.sort((a,b) => a - b);
  return arr1;
};

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 106 ], []), "=?", [ 1, 2, 106 ]);