function lowestPricesInCities(arr) {
  let obj = {};
  for (let element of arr) {
    let tokens = element.split(" | ");
    let town = tokens[0];
    let product = tokens[1];
    let price = Number(tokens[2]);
    if (!obj.hasOwnProperty(product)) {
      obj[product] = { town, price };
    } else {
      if (price < obj[product].price) {
        obj[product] = { town, price };
      }
    }
  }
  let productName = Object.keys(obj);
  for (nameProduct of productName) {
    console.log(
      `${nameProduct} -> ${obj[nameProduct].price} (${obj[nameProduct].town})`
    );
  }
}
lowestPricesInCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
