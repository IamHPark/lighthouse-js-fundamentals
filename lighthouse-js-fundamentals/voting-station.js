const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
 
// at least 20 capacity
// stations can be schools or community centres



function chooseStations (stations) {
  let votingStations = [];

  for (const station of stations) {
    const capacity = station[1];
    const type = station[2];

    if (capacity >=20 && (type === 'school' || type === 'community centre')){
      votingStations.push(station[0]);
    }
  }

  return votingStations;
};


console.log(chooseStations(stations));