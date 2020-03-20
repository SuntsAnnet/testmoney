'use strict';
let money = +prompt("Ваш месячный бюджет","");
console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD",'');
console.log(time);
let appData = {
    your_money: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income : [],
    savings : false
};
let count_quest = prompt ("Сколько у вас статей расхода?","");
var waste =0 ;
for(let i=0;i<count_quest;i++) {

    let a = prompt("Введите обязательную статью расходов в этом месяце","");
    let b = +prompt("Во сколько обойдется?","");
       if ((typeof(a))==='string' && (typeof(a))!= null && a!= ''  && (typeof(b))!= null && b!= ''){
        appData.expenses[a]=b;   
        waste =  waste + b;
       } else {
           console.log ('некоректный ввод');
       }
}
//let a = prompt("Введите обязательную статью расходов в этом месяце","");
//let b = prompt("Во сколько обойдется?","");
//appData.expenses.a=b;
alert(`Ваш свободный бюджет составляет ${(appData.your_money - waste)} `);
 
switch ((appData.your_money - waste)) {
    case((appData.your_money - waste)<100): console.log('низкий бюджет') ;
    break;
    case(((appData.your_money - waste)>100) && ((appData.your_money - waste)<1000)):console.log( 'средний бюджет' );
    break;
    case((appData.your_money - waste)>1000): console.log('тратьте сколько хотите') ;
    break;
}

//поменять промпт на инпут в html --  не могу т.к не знаю как потом управлять этой переменной 
//master -> (checkout -b 'имя ветки новой') 