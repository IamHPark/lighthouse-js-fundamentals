let lastIndexOf = function(arr,num) {
  let index = 0;
  let match ;
  for (let i = 0 ; i < arr.length ; i++){
    if ( arr[i] === num) {
      index = i;
      match = true;
    }
  }
  if (match){
    return index;
  } else {
    return -1;
  }
}

