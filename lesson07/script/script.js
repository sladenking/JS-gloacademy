'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
  start = function () {
    money = prompt('Ваш месячный доход?');

    while (!isNumber(money)) {
      money = prompt('Ваш месячный доход?');
    }
  };

start();

let appData = {
  budget: +money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 10000,
  period: 12,
  asking: function () {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses
      .toLowerCase()
      .split(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) {
      let value = 0;
      let str = prompt('Введите обязательную статью расходов');
      value = +prompt('Во сколько это обойдется?');
      appData.expenses[str] = value;
      while (!isNumber(value)) {
        value = prompt('Во сколько это обойдется?');
      }
    }
  },
  getExpensesMonth: function () {
    let sum = 0;
    for (let key in appData.expenses) {
      sum += appData.expenses[key];
    }
    appData.expensesMonth = sum;
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
  },
  getTargetMonth: function () {
    let res = appData.mission / appData.budgetMonth;
    if (res > 0) {
      console.log(`Цель будет достигнута за: ${Math.ceil(res)} месяца(-ев)`);
    } else {
      console.log(`Цель не будет достигнута`);
    }
  },
  getStatusIncome: function () {
    if (appData.budgetDay > 40) {
      return console.log('У вас высокий уровень дохода');
    } else if (appData.budgetDay <= 40 && appData.budgetDay > 20) {
      return console.log('У вас средний уровень дохода');
    } else if (appData.budgetDay <= 20 && appData.budgetDay > 0) {
      return console.log('К сожалению, у вас уровень дохода ниже среднего');
    } else {
      return console.log('Что то пошло не так');
    }
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
console.log('Расходы за месяц: ', appData.expensesMonth, 'доллара(-ов)');
appData.getTargetMonth();
appData.getStatusIncome();

console.log('наша программа включает в себя: ');
for (let key in appData) {
    console.log(key, appData[key]);
}
