function Telefon(marka, kolor, cena) {
	this.marka = marka;
	this.kolor = kolor;
	this.cena = cena;
};

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
};

var samsungGalaxy6S = new Telefon('Samsung', 'grafitowy', '1569 PLN');
var iPhone6s = new Telefon('Apple', 'srebrny', '2250 PLN');
var onePlusOne = new Telefon('OnePlus', 'czarny', '999 PLN');

iPhone6s.printInfo();
