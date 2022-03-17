const judgeVegetable = function(vegetables, metric){
  let arr = [];
  if(metric === "redness"){
    for (let i = 0; i<vegetables.length; i++){
      arr.push(vegetables[i].redness);
    }
    arr.sort((a,b) => a - b);
    for (let j = 0; j < vegetables.length; j++){
      if (arr[arr.length-1]=== vegetables[j].redness){
        return vegetables[j].submitter;
      }
    }
  } else if (metric === "plumpness"){
    for (let i = 0; i<vegetables.length; i++){
      arr.push(vegetables[i].plumpness);
    }
    arr.sort((a,b) => a - b);
    for (let j = 0; j < vegetables.length; j++){
      if (arr[arr.length-1]=== vegetables[j].plumpness){
        return vegetables[j].submitter;
      }
    }
  }
}
  


arr = [3,7,2,4];

let largest = function(){
  let max = arr[0];
  for (let i = 1; i<arr.length; i++){
    if(max <arr[i]){
      max = arr[i];
    }
  }
  return max 
}

//metric can have any value, not only redenss or plumpness
//metric has a string value, so need to use 'Bracket notation' instead of 'Dot notation'
const judgeVegetable = function(vegetables, metric){
  let arr = [];
    for (let i = 0; i < vegetables.length; i++){
      arr.push(vegetables[i][metric]);
    }
    arr.sort((a,b) => a - b);
    for (let j = 0; j < vegetables.length; j++){
      if (arr[arr.length - 1] === vegetables[j][metric]){
        return vegetables[j].submitter;
      }
    }
  } 