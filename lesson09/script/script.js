const calculateButton = document.getElementById('start'),
    incomeAdd = document.getElementsByTagName('button')[0],
    expensesAdd = document.getElementsByTagName('button')[1],
    depositCheckbox = document.querySelector('.deposit-check'),
    incomeItem = document.querySelectorAll('.additional_income-item'),
    resultValue = document.getElementsByClassName('result-total'),
    salaryAmount = document.querySelector('.salary>input'),
    incomeTitle = document.querySelectorAll('.income-items>input')[0],
    incomeAmount = document.querySelectorAll('.income-items>input')[1],
    additionalIncome1 = document.querySelectorAll('.additional_income-title>input')[0],
    additionalIncome2 = document.querySelectorAll('.additional_income-title>input')[1],
    expensesTitle = document.querySelectorAll('.expenses-items>input')[0],
    expensesAmount = document.querySelectorAll('.expenses-items>input')[1],
    additionalExpenses = document.querySelector('.additional_expenses>input'),
    depositAmount = document.querySelectorAll('.deposit-calc>input')[0],
    depositPercent = document.querySelectorAll('.deposit-calc>input')[1],
    targetAmount = document.querySelector('.target>input'),
    periodSelect = document.querySelector('.period>input');



