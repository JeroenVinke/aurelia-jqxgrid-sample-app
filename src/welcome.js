export class Welcome {
  constructor() {
    this.data = this.generateData();
  }

  generateData() {
    let data = new Array();

    let firstNames = [
      'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
    ];

    let lastNames = [
      'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
    ];

    let productNames = [
      'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
    ];

    let priceValues = [
      '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
    ];

    for (let i = 0; i < 200; i++) {
      let row = {};
      let productindex = Math.floor(Math.random() * productNames.length);
      let price = parseFloat(priceValues[productindex]);
      let quantity = 1 + Math.round(Math.random() * 10);

      row['firstname'] = firstNames[Math.floor(Math.random() * firstNames.length)];
      row['lastname'] = lastNames[Math.floor(Math.random() * lastNames.length)];
      row['productname'] = productNames[productindex];
      row['price'] = price;
      row['quantity'] = quantity;
      row['total'] = price * quantity;

      data[i] = row;
    }

    return data;
  }
}