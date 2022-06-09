function heroicInventory(arr) {
  let result = [];
  for (let element of arr) {
    let tokens = element.split(" / ");
    let name = tokens[0];
    let level = Number(tokens[1]);
    let items = tokens[2];
    items = items ? items.split(", ") : [];
    result.push({ name, level, items });
  }
  console.log(JSON.stringify(result));
}
heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
