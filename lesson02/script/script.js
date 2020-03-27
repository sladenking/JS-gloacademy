
let money = 1200, 
income = 'Freelance', 
addExpenses = "Bar, Cigarettes, Taxi, Girlfriend", 
deposit = true, 
mission = 5000, 
period = 12,
budgetDay = money / 30;


console.log('money: ',typeof money);

console.log('income: ',typeof income);

console.log('deposit: ',typeof deposit);

console.log('addExpenses: ', addExpenses.length, 'символа');

console.log(`Период равен ${period} месяцев`);

console.log(`Цель: заработать ${mission} долларов`);

console.log(addExpenses.toLowerCase().split(', '));

console.log('budgetDay: ', budgetDay);