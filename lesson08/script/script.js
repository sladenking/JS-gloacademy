'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
  start = function () {
    money = prompt('Ваш месячный доход?', 3000);

    while (!isNumber(money)) {
      money = prompt('Ваш месячный доход?');
    }
  };

start();

let appData = {
  budget: + money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 10000,
  period: 12,
  asking: function () {
    if (confirm('Есть ли доп заработок?')) {
      let ItemIncome = prompt('Какой у вас доп заработок?', 'Такси');
      while (!isNaN(ItemIncome)) {
        ItemIncome = prompt('Какой у вас доп заработок?', 'Такси');
      }
      let cashIncome = prompt('Сколько зарабатываете', 800);
      while (!isNumber(cashIncome)) {
        cashIncome = prompt('Сколько зарабатываете', 800);
      }
      appData.income[ItemIncome] = cashIncome;
      
    }

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
     'еда, девушка, бар');
    appData.addExpenses = addExpenses
      .toLowerCase()
      .split(', ');
    // let some = "";
    // for (let output of appData.addExpenses) {
    //   some += output.charAt(0).toUpperCase() + output.substr(1) + ", ";
    // }
    // console.log(some.substr(0, some.length-2));
    for (let i = 0; i < appData.addExpenses.length; i++) {
      appData.addExpenses[i] = appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].substr(1);
     }
    console.log(appData.addExpenses.join(', '));
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) {
      let value = 0;
      let str = prompt('Введите обязательную статью расходов', 'Курсы');
      while (!isNaN(str)) {
        str = prompt('Введите обязательную статью расходов', 'Курсы');
      }
      value = +prompt('Во сколько это обойдется?', 300);
      appData.expenses[str] = value;
      while (!isNumber(value)) {
        value = prompt('Во сколько это обойдется?', 300);
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
  },
  getInfoDeposit: function () {
    if (appData.deposit) {
      appData.percentDeposit = prompt('Какой годовой процент', 10);
      while (!isNumber(appData.percentDeposit)) {
        appData.percentDeposit = prompt('Какой годовой процент', 10);
      }
      appData.moneyDeposit = prompt('Какая сумма депозита?', 1000);
      while (!isNumber(appData.moneyDeposit)) {
        appData.moneyDeposit = prompt('Какая сумма депозита?', 1000);
      }
    }
  },
  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
console.log('Расходы за месяц: ', appData.expensesMonth, 'доллара(-ов)');
appData.getTargetMonth();
appData.getStatusIncome();

// console.log('наша программа включает в себя: ');
// for (let key in appData) {
//   console.log(key, appData[key]);
// }
