let smartGarbage = function(trash, bins){
let garbage = bins; 
  if (trash === 'waste'){
    bins.waste = bins.waste + 1; 
  } else if (trash === 'recycling'){
    bins.recycling = bins.recycling + 1;
  } else if (trash === 'compost'){
    bins.compost = bins.compost + 1;
  }
  return garbage
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
