'use strict';

let start = document.getElementById('start'),
  incomeAdd = document.getElementsByTagName('button')[0],
  expensesAdd = document.getElementsByTagName('button')[1],
  depositCheck = document.querySelector('#deposit-check'),
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
  salaryAmount = document.querySelector('.salary-amount'),
  budgetDayValue = document.querySelector('.budget_day-value'),
  budgetMonthValue = document.querySelector('.budget_month-value'),
  expensesMonthValue = document.querySelector('.expenses_month-value'),
  accumulatedMonthValue = document.querySelector('.accumulated_month-value'),
  additionalIncomeValue = document.querySelector('.additional_income-value'),
  additionalExpensesValue = document.querySelector('.additional_expenses-value'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  incomePeriodValue = document.querySelector('.income_period-value'),
  targetMonthValue = document.querySelector('.target_month-value'),
  incomeTitle = document.querySelector('.income-title'),
  incomeItems = document.querySelectorAll('.income-items'),
  expensesTitle = document.querySelector('.expenses-title'),
  expensesItems = document.querySelectorAll('.expenses-items'),
  additionalExpenses = document.querySelector('.additional-expenses'),
  periodSelect = document.querySelector('.period-select'),
  targetAmount = document.querySelector('.target-amount'),
  inputs = document.querySelectorAll('input'),
  periodAmount = document.querySelector('.period-amount'),
  cancel = document.getElementById('cancel');

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

inputs.forEach(function(e){
  e.disabled = false;
});

start.setAttribute('disabled', true);

salaryAmount.addEventListener('input', () => {
  if (salaryAmount.value.trim() !== ''){
    start.disabled = false;
  } else {
    start.disabled = true;
  }
});

function blockInputs(){
  let inputs = document.querySelectorAll('input');
  start.style.display = 'none';
  cancel.style.display = 'block';
  inputs.forEach(function(element){
    element.disabled = true;
  });
}

function inputRefresh() {
  let inputString = document.querySelectorAll('[placeholder="Наименование"]');
  let inputNumber = document.querySelectorAll('[placeholder="Сумма"]');
  console.log('inputNumber: ', inputNumber);

  inputString.forEach(el => {
    el.addEventListener('input',()=> {
      el.value = el.value.replace(/[^а-яА-Я ,.!]/,'');
    });
  });
  inputNumber.forEach(el => {
    el.addEventListener('input',()=> {
      el.value = el.value.replace(/[^0-9]/,'');
    });
  });
}
inputRefresh();

let appData = {
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 10000,
  start: function() {
    appData.budget = +salaryAmount.value;

    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth(); 
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();
    appData.selectPeriod(); 

    appData.showResult();
    blockInputs();
  },
  showResult: function() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.floor(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
  },
  addExpensesBlock: function() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.querySelector('.expenses-title').value = '';
    cloneExpensesItem.querySelector('.expenses-amount').value = '';
    expensesItems[0]
      .parentNode
      .insertBefore(cloneExpensesItem, expensesAdd);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
      expensesAdd.style.display = 'none';
    }
    inputRefresh();
  },
  addIncomeBlock: function() {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    cloneIncomeItem.querySelector('.income-title').value = '';
    cloneIncomeItem.querySelector('.income-amount').value = '';
    incomeItems[0]
      .parentNode
      .insertBefore(cloneIncomeItem, incomeAdd);
      incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
        incomeAdd.style.display = 'none';
    }
    inputRefresh();
  },
  getExpenses: function() {
    expensesItems.forEach(function(item) {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '' ) {
            appData.expenses[itemExpenses] = +cashExpenses;
        }
    });
  },
  getIncome: function() {
      incomeItems.forEach(function(item)  {
          let itemIncome = item.querySelector('.income-title').value;
          let cashIncome = item.querySelector('.income-amount').value;
          if (itemIncome !== '' && cashIncome !== '' ) {
            appData.income[itemIncome] = +cashIncome;
        }
      });
      for(let key in this.income) {
          this.incomeMonth += +this.income[key];
      }
  },
  getAddExpenses: function() {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item) {
        item = item.trim();
        if (item !== '') {
            appData.addExpenses.push(item);
        }
    });
  },
  getAddIncome: function() {
    additionalIncomeItem.forEach(function(item) {
        let itemValue = item.value.trim();
        if (itemValue !== '') {
            appData.addIncome.push(itemValue);
        }
    });
  },
  selectPeriod: function() {
    periodAmount.textContent = periodSelect.value;
  },
  getExpensesMonth: function() {
    let sum = 0;
    for (let key in this.expenses) {
      sum += this.expenses[key];
    }
    this.expensesMonth = sum;
  },
  getBudget: function() {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;
  },
  getTargetMonth: function() {
    return targetAmount.value / this.budgetMonth;
  },
  getStatusIncome: function() {
    if (this.budgetDay > 40) {
      return console.log('У вас высокий уровень дохода');
    } else if (this.budgetDay <= 40 && this.budgetDay > 20) {
      return console.log('У вас средний уровень дохода');
    } else if (this.budgetDay <= 20 && this.budgetDay > 0) {
      return console.log('К сожалению, у вас уровень дохода ниже среднего');
    } else {
      return console.log('Что то пошло не так');
    }
  },
  getInfoDeposit: function() {
    if (this.deposit) {
      this.percentDeposit = isNumber('Какой годовой процент', 10);
      this.moneyDeposit = isNumber('Какая сумма заложена?', 10000);
    }
  },
  calcPeriod: function() {
    return this.budgetMonth * periodSelect.value;
  },
  reset: function() {
    inputs.forEach(element => {
      element.value = '';    
    });
  
    inputs.forEach(element => {
      element.disabled = false;
    });
  
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
  
    start.style.display = 'block';
    cancel.style.display = 'none';
    periodSelect.value = 1;
    periodAmount.textContent = periodSelect.value;
    
    incomeItems.forEach((element, i) => {  
      if (i !== 0) {
        element.remove();
      }
    });
    incomeAdd.style.display = 'block';
  
    expensesItems.forEach((element, i) => {  
      if (i !== 0) {
        element.remove();
      }
    });
    expensesAdd.style.display = 'block';

    start.setAttribute('disabled', true);
  }
};

expensesAdd.addEventListener('click', appData.addExpensesBlock);
incomeAdd.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change', appData.selectPeriod);

start.addEventListener('click', appData.start.bind(appData));
cancel.addEventListener('click', appData.reset.bind(appData));



