var ItemsDB = [], itemCount = 0;
var nameGenDB = [
	'mon',
	'sha',
	'don',
	'emi',
	'dor',
	'emu',
	'ero',
	'e',
	'a',
	'i',
	'ipa',
	'ira',
	'sot',
	'rash',
	'rong',
	'dong',
	'deri',
	'mont',
	'pung',
	'art'
]

for(var i = 0; i < 6; i++) { //categories
	var l = Math.round(Math.random() * 5) + 5;
	var category = [];
	for(var j = 0; j < l; j++) { //items
		var price = (Math.round(Math.random() * 800) + 50);
		var item = {
			name: getRandomName(),
			price: price,
			image: 'content/placeholder.png',
			id: itemCount,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
		}
		category.push(item);
		itemCount++;
	}
	ItemsDB.push(category);
}

console.log(ItemsDB);

function getRandomName() {
	var l = Math.round(Math.random()) + 2;
	var str = "";
	for(var i = 0; i < l; i++){
		str += nameGenDB[Math.round(Math.random() * (nameGenDB.length - 1))];
	}
	return str;
}