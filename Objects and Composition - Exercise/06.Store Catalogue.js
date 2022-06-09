function storeCatalogue(arr) {
  let obj = {};
  for (let line of arr) {
    let tokens = line.split(" : ");
    let [product, price] = tokens;
    let firstLetter = product[0];
    if (!obj.hasOwnProperty(firstLetter)) {
      obj[firstLetter] = {};
    }
    obj[firstLetter][product] = price;
  }
  let sortedLetters = Object.keys(obj).sort((a, b) => a.localeCompare(b));
  for (const letter of sortedLetters) {
    console.log(letter);
    let sortedProducts = Object.keys(obj[letter]).sort((a, b) =>
      a.localeCompare(b)
    );
    for (const product of sortedProducts) {
      console.log(`  ${product}: ${obj[letter][product]}`);
    }
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);