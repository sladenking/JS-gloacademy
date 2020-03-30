
let money = prompt('Ваш месячный доход?'), 
income = 'Freelance', 
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'), 
deposit = confirm('Есть ли у вас депозит в банке?'), 
mission = 5000, 
period = 12,
expenses1 =  prompt('Введите обязательную статью расходов'),
amount1 =  prompt('Во сколько это обойдется?'),
expenses2 =  prompt('Введите обязательную статью расходов'),
amount2 =  prompt('Во сколько это обойдется?'),
budgetMonth = money - amount1 - amount2,
budgetDay = budgetMonth / 30;

console.log('money: ',typeof money);

console.log('income: ',typeof income);

console.log('deposit: ',typeof deposit);

console.log('addExpenses: ', addExpenses.length, 'символа(-ов)');

console.log(`Период равен ${period} месяцев`);

console.log(`Цель: заработать ${mission} долларов`);

console.log(addExpenses.toLowerCase().split(', '));

console.log(`Бюджет на месяц: ${budgetMonth} долларов`);

console.log(`Цель будет достигнута за: ${Math.ceil(mission/budgetMonth)} месяцев`);

console.log(`Бюджет на день: ${Math.floor(budgetDay)} долларов`);

if (budgetDay > 40) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay  <= 40 && budgetDay  > 20) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay  <= 20){
    console.log('К сожалению, у вас уровень дохода ниже среднего');
} else {
    console.log('Что то пошло не так');
}