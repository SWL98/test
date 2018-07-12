// Урок 1 - типы данных и github
let many = +prompt('Какой у вас бюджет?'),
	name = prompt('Введите название магазина')

var market = {
	manyback: many + ' рублей',
	marketName: name,
	shopGoods: [],
	employers: {}
}

for(i = 0; i < 3; i++){
	market.shopGoods[i] = prompt('Название товара')
}

console.log(market);

let budget = many / 30;

alert('Бюджет на 1 день = ' + budget + ' р.');

market.bugh = budget;