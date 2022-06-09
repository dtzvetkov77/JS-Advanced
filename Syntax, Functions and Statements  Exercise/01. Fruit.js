function fruit(product, weight, price) {
    let weightOfProduct = Number(weight);
    let priceForKilo = Number(price);
    weightOfProduct = weightOfProduct / 1000;
    let sum = weightOfProduct * priceForKilo;
    console.log(
      `I need $${sum.toFixed(2)} to buy ${weightOfProduct.toFixed(
        2
      )} kilograms ${product}.`
    );
  }