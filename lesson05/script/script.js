'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money, 
income = 'Freelance', 
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'), 
deposit = confirm('Есть ли у вас депозит в банке?'), 
mission = 10000, 
period = 12;
// expenses1 =  prompt('Введите обязательную статью расходов'),
// amount1 =  +prompt('Во сколько это обойдется?', 200),
// expenses2 =  prompt('Введите обязательную статью расходов'),
// amount2 =  +prompt('Во сколько это обойдется?', 500);


let start = function(){
    money = prompt('Ваш месячный доход?');

    do {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));
};

start();

let showTypeOf = function(data) {
    console.log(typeof (data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase().split(', '));

let expenses = [];

function getExpensesMonth() {
    let sum=0;

    for (let i=0; i <2; i++){
        expenses[i] = prompt('Введите обязательную статью расходов');

        sum += +prompt('Во сколько это обойдется?');
        while (!isNumber(sum)) {
            sum = prompt('Во сколько это обойдется?');
        }
    }
    return sum;
}

let expensesAmout = getExpensesMonth();

console.log('Расходы за месяц: ', expensesAmout, 'доллара(-ов)');

function getAccumulatedMonth() {
    return money - expensesAmout;
}
let accumulatedMonth  = getAccumulatedMonth();
let budgetDay = accumulatedMonth / 30;

function getTargetMonth() {
    let res = mission/accumulatedMonth;
    if (res > 0){
        console.log(`Цель будет достигнута за: ${Math.ceil(res)} месяца(-ев)`);
        console.log(`Бюджет на день: ${Math.floor(budgetDay)} доллара(-ов)`);
    } else {
        console.log(`Цель не будет достигнута`);
    }
}
getTargetMonth();

let getStatusIncome = function() {
    if (budgetDay > 40) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay  <= 40 && budgetDay  > 20) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay  <= 20 && budgetDay  > 0){
        return ('К сожалению, у вас уровень дохода ниже среднего');
    } else {
        return ('Что то пошло не так');
    }
};

console.log(getStatusIncome());

