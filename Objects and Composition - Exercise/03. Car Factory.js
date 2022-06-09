function carFactory(input) {
  let engines = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 },
  ];
  let carriages = [{type: "hatchback", color: input.color },{type: "coupe", color: input.color}];
  let wheelSize = input.wheelsize % 2 == 1 ? input.wheelsize : input.wheelsize - 1;
  
    return {
    model: input.model,
    engine: engines.filter((e) => e.power >= input.power)[0],
    carriage: carriages.filter((c) => c.type === input.carriage)[0],
    wheels: [wheelSize, wheelSize, wheelSize, wheelSize],
  }
}
console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
