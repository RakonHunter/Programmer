let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

for(let i = 0; i < 2; i++){
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
		
	if ( (typeof(a))==='string' && (typeof(a)) !=null && (typeof(b)) !=null
	  && a != '' && b !='' && a.length <50) {
        console.log('done');
		appData.expenses[a] = b;
	}	else {

	}
};

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет" + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка")
}





/*var a = 5;
console. log

let incr = 10;
    decr = 10;

console.log(++incr)
console.log(--decr);


let isCheked = false,
    isClose = false;

    console. log(isCheked && isClose);

let persone = {
    name: "Yarik",
    age: 23,
    isMarried: false
};

console.log(persone.age);

let arr = ['plim.png','orange.jpg','apple.bmp'];
console.log(arr[2]);*/
