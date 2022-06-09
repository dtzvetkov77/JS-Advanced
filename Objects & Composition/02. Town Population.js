function townPopulation(input) {
  let result = {};
  for (const element of input) {
    let tokens = element.split(" <-> ");
    let town = tokens[0];
    let population = Number(tokens[1]);

    if (result.hasOwnProperty(town)) {
      population += result[town];
    }

    result[town] = population;
  }

  for (let key in result) {
    console.log(`${key} : ${result[key]}`);
  }
}
townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
