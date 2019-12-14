let money, time;

function start() {
    let money = +prompt('Ваш бюджет на месяц');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while(isNaN(money) || money || money == "" || money == null) {
        let money = prompt('Ваш бюджет на месяц');
    }
}
start();

let appData = {
    budget: money,
    time: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++){
            let a = prompt ("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt ("Во сколько обойдется?");
        
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
                && a != '' && b !='' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }    
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed;
        alert("Ежедневный бюджет: " + money.moneyPerDay);   
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка")
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка!");
        } else if (appData.moneyPerDay < 2000) {
            console.log("Высокий уровень достатка!");
        } else {
            console.log("Произошла ошибка!");
        }
    },
    checkSaving: function() {
        if (appData.saving == true) {
            let save = +promt("Какова сума накоплений?"),
                precent = +promt("Под какой процент?");
    
                appData.monthInCome = save/100/12*precent;
                alert("Доход в месяц с вашего депоизота:" + appData.monthInCome);
        }
    },
    chooseOptExpenses: function() {
        for(let i = 0; i < 3; i++){
            let questionOptExpenses = prompt("Статья необезательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        let items = promt("Что принесет дополнительный доход? (Перечислите через запятую)");
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
        
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себе данные" + key + " - " + appData[key]);
}






    