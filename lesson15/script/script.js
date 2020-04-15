'use strict';

const start = document.getElementById('start'),
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
  expensesTitle = document.querySelector('.expenses-title'),
  additionalExpenses = document.querySelector('.additional-expenses'),
  periodSelect = document.querySelector('.period-select'),
  targetAmount = document.querySelector('.target-amount'),
  inputs = document.querySelectorAll('input'),
  periodAmount = document.querySelector('.period-amount'),
  cancel = document.getElementById('cancel');

  
let expensesItems = document.querySelectorAll('.expenses-items'),
  incomeItems = document.querySelectorAll('.income-items');

start.setAttribute('disabled', 'true');

class AppData {
  constructor(){
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
  }

  isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  start() {
    if (salaryAmount.value === '') {
      start.setAttribute('disabled', 'true');
      return;
    }
    let inputTextData = document.querySelectorAll('.data input[type=text');
    inputTextData.forEach((element) => {
      element.setAttribute('disabled', 'true');
    });
    expensesAdd.setAttribute('disabled', 'true');
    incomeAdd.setAttribute('disabled', 'true');
    start.style.display = 'none';
    cancel.style.display = 'block';
    depositCheck.disabled = true;
    periodSelect.disabled = true;
  
  
    this.budget = +salaryAmount.value;
  
    this.getExpInc();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.selectPeriod();
  
    this.showResult();
  }

  showResult(){
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.floor(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
  }

  addExpensesBlock() {
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.querySelector('.expenses-title').value = '';
    cloneExpensesItem.querySelector('.expenses-amount').value = '';
    expensesItems[0]
      .parentNode
      .insertBefore(cloneExpensesItem, expensesAdd);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
      expensesAdd.style.display = 'none';
    }
  }

  addIncomeBlock() {
    const cloneIncomeItem = incomeItems[0].cloneNode(true);
    cloneIncomeItem.querySelector('.income-title').value = '';
    cloneIncomeItem.querySelector('.income-amount').value = '';
    incomeItems[0]
      .parentNode
      .insertBefore(cloneIncomeItem, incomeAdd);
      incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
        incomeAdd.style.display = 'none';
    }
  }

  getExpInc() {
    const count = (item) => {
      const startStr = item.className.split('-')[0];
      const itemTitle = item.querySelector(`.${startStr}-title`).value;
      const itemAmount = item.querySelector(`.${startStr}-amount`).value;
      if (itemTitle !== '' && itemAmount !== '') {
        this[startStr][itemTitle] = itemAmount;
      }
    };
  
    incomeItems.forEach(count);
    expensesItems.forEach(count);
  
    for (const key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  }

  getAddExpenses() {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach((item) => {
        item = item.trim();
        if (item !== '') {
            this.addExpenses.push(item);
        }
    });
  }

  getAddIncome() {
    additionalIncomeItem.forEach((item) => {
        let itemValue = item.value.trim();
        if (itemValue !== '') {
            this.addIncome.push(itemValue);
        }
    });
  }

  selectPeriod() {
    periodAmount.textContent = periodSelect.value;
  }

  getExpensesMonth() {
    for (const key in this.expenses) {
        this.expensesMonth += +this.expenses[key];
    }
  }

  getBudget() {
    this.budgetMonth = +this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = +this.budgetMonth / 30;
  }

  getTargetMonth() {
    return targetAmount.value / this.budgetMonth;
  }

  getStatusIncome() {
    if (this.budgetDay > 40) {
      return console.log('У вас высокий уровень дохода');
    } else if (this.budgetDay <= 40 && this.budgetDay > 20) {
      return console.log('У вас средний уровень дохода');
    } else if (this.budgetDay <= 20 && this.budgetDay > 0) {
      return console.log('К сожалению, у вас уровень дохода ниже среднего');
    } else {
      return console.log('Что то пошло не так');
    }
  }

  getInfoDeposit() {
    // if (this.deposit) {
    //   this.percentDeposit = isNumber('Какой годовой процент', 10);
    //   this.moneyDeposit = isNumber('Какая сумма заложена?', 10000);
    // }
  }

  calcPeriod() {
    return this.budgetMonth * periodSelect.value;
  }

  reset() {
    const inputTextData = document.querySelectorAll('.data input[type=text]'),
        resultInputData = document.querySelectorAll('.result input[type=text]');
  
    inputTextData.forEach(function(elem) {
        elem.value = '';
        elem.removeAttribute('disabled');
        periodSelect.disabled = false;
        periodSelect.value = '0';
        periodAmount.textContent = periodSelect.value;
    });
  
    resultInputData.forEach(function(elem) {
        elem.value='';
    });
    
    for (let i=1; i<incomeItems.length; i++) {
        incomeItems[i].parentNode.removeChild(incomeItems[i]);
        incomeAdd.style.display = 'block';
    }
    
    for (let i=1; i<expensesItems.length; i++) {
        expensesItems[i].parentNode.removeChild(expensesItems[i]);
        expensesAdd.style.display = 'block';
    }
  
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
    expensesAdd.removeAttribute('disabled');
    incomeAdd.removeAttribute('disabled');
    depositCheck.disabled = false;
  }

  eventListeners() {
    expensesAdd.addEventListener('click', this.addExpensesBlock);
    incomeAdd.addEventListener('click', this.addIncomeBlock);
    periodSelect.addEventListener('change', this.selectPeriod);
    
    start.addEventListener('click', this.start.bind(this));
    cancel.addEventListener('click', this.reset.bind(this));
    salaryAmount.addEventListener('input', () => {
      if (salaryAmount.value.trim() !== '' && this.isNumber(salaryAmount.value)){
        start.disabled = false;
      } else {
        start.disabled = true;
        salaryAmount.value = '';
      }
    });
  }
}

const appData = new AppData();
appData.eventListeners();