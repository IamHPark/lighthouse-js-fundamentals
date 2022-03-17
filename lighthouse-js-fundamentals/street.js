  // let obj = {};
  // obj.time = Date.now();
  // obj.speed = 0; 
  // cars = cars.push(obj);
  // return cars;

let carPassing = function(cars,speed){
  let obj = {};
  obj.time = Date.now();
  obj.speed = speed;
  cars.push(obj);
  return cars
} 

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

carPassing(cars, speed)