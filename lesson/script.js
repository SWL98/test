// Урок 1 - типы данных и github
// let many = +prompt('Какой у вас бюджет?'),
// 	name = prompt('Введите название магазина')

let prise = +prompt('Введите цену');

var market = {
	manyback: 45000 + ' рублей',
	marketName: 'Apple-store',
	shopGoods: [],
	employers: {},
	discount: true
}

if(market.discount == true){
	priseDiscount = prise * 0.8;
}

alert(priseDiscount +'\n'+ prise)

// for(i = 0; i < 3; i++){
// 	var a = prompt('Название товара');	
// 	while (a == '' || a == null){
// 		i = i;
// 		console.log('Хватит жать отмена!');
// 		a = prompt('Название товара');
// 	}
// 	market.shopGoods[i] = a;
// }

function employers() {
	for(i = 0; i < 4; i++){
		var a = prompt('Имя сотрудника');
		var numb = i + 1;
		market.employers[i] = 'Номер - ' + numb + ' зовут: ' + a;
	}
}

employers();


console.log(market);

let budget = 45000 / 30;

alert('Бюджет на 1 день = ' + budget + ' р.');

market.bugh = budget;