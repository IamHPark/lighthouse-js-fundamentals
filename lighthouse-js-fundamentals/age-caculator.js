const ageCalculator = function(name, yearOfBirth, currentYear){
  return name + " is " + (currentYear - yearOfBirth) + " years old.";
}

console.log(ageCalculator("Suzie", 1984, 2016));
console.log(ageCalculator("Jack", 2004, 2016));
