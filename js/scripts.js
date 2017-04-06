function Phone(brand, color, price) {
	this.brand = brand;
	this.color = color;
	this.price = price;
};

Telefon.prototype.printInfo = function() {
	console.log("The brand of the phone is " + this.brand + ", the color is " + this.color + " and the price is " + this.price + ".");
};

var samsungGalaxy6S = new Phone('Samsung', 'graphite', '1569 PLN');
var iPhone6s = new Phone('Apple', 'silver', '2250 PLN');
var onePlusOne = new Phone('OnePlus', 'black', '999 PLN');

iPhone6s.printInfo();
