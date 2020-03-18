'use strict';
let money = prompt("Ваш месячный бюджет","");
console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD",'');
console.log(time);
let appData = {
    you_money: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income : [],
    savings : false
};
let a = prompt("Введите обязательную статью расходов в этом месяце","");
let b = prompt("Во сколько обойдется?","");
appData.expenses.a=b;
alert(`Ваш бюджет составляет ${(appData.you_money -appData.expenses.a)/30} `);