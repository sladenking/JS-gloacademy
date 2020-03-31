'use strict';

let money = +prompt('Ваш месячный доход?', 5000), 
income = 'Freelance', 
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'), 
deposit = confirm('Есть ли у вас депозит в банке?'), 
mission = 10000, 
period = 12,
expenses1 =  prompt('Введите обязательную статью расходов'),
amount1 =  +prompt('Во сколько это обойдется?', 200),
expenses2 =  prompt('Введите обязательную статью расходов'),
amount2 =  +prompt('Во сколько это обойдется?', 500);


function getExpensesMonth(amount1, amount2) {
    return amount1 + amount2;
}

function getAccumulatedMonth(money, amount1,amount2) {
    return money - amount1 - amount2;
}
let accumulatedMonth  = getAccumulatedMonth(money, amount1,amount2);
let budgetDay = accumulatedMonth / 30;

function getTargetMonth(mission, accumulatedMonth) {
    return mission/accumulatedMonth;
}

let showTypeOf = function(data) {
    console.log(typeof (data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log('getExpensesMonth: ', getExpensesMonth(amount1, amount2), 'доллара(-ов)');

console.log(addExpenses.toLowerCase().split(', '));
console.log(`Цель будет достигнута за: ${Math.ceil(getTargetMonth(mission, accumulatedMonth))} месяца(-ев)`);

console.log(`Бюджет на день: ${Math.floor(budgetDay)} доллара(-ов)`);

let getStatusIncome = function() {
    if (budgetDay > 40) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay  <= 40 && budgetDay  > 20) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay  <= 20){
        return ('К сожалению, у вас уровень дохода ниже среднего');
    } else {
        return ('Что то пошло не так');
    }
};

console.log(getStatusIncome());

