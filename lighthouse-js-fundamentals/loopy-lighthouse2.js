const loopyLighthouse = function (range, multiples, words) {
//range = [start value, end value]
//multiples = [num1 , num2] : multiples you want to replace with words 
//words = [word1, word2] : raplace the multiples 

  for (let i = range[0]; i <= range[1]; i += 1){
    if ( i % multiples[0] === 0 && i % multiples[1] === 0 ) {
      console.log("BattyBeacon");
    } else if ( i % multiples[0] === 0 ) {
      console.log("Batty");
    } else if ( i % multiples[1] === 0 ) {
      console.log("Beacon");
    } else {
      console.log(i);
    }
  } 
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);