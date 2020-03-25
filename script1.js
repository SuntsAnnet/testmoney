'use strict';
let money,time;
function start (){
    money = +prompt("Ваш месячный бюджет","");
    console.log(money);
    time = prompt("Введите дату в формате YYYY-MM-DD",'');
    console.log(time);   
    while (isNaN(money)|| money ==''||money ==null){
        money = +prompt("Ваш месячный бюджет","");
        console.log(money);
    }
}

let appData = {
    your_money: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income : [],
    savings : false,
    chooseExpenses: function(){
        let count_quest = prompt ("Сколько у вас статей расхода?","");
        var waste =0 ;
        for(let i=0;i<count_quest;i++) {
        
            let a = prompt("Введите обязательную статью расходов в этом месяце","");
            let b = +prompt("Во сколько обойдется?","");
               if ((typeof(a))==='string' && (typeof(a))!= null && a!= ''  && (typeof(b))!= null && b!= ''){
                appData.expenses[a]=b;   
                waste =  waste + b;
               } else {
                   i=i-1;
               }
        }
    },
    detectDayBadget:function(){
        alert(`Ваш свободный бюджет составляет ${(appData.your_money - waste)/30} `);
    },
    detectLevel:function(){
        if (((appData.your_money - waste)/30)<1000 ){
            console.log('низкий бюджет') ;   
         }else if ((((appData.your_money - waste)/30)>=1000 ) && (((appData.your_money - waste)/30)<10000 )) {
            console.log( 'средний бюджет' );   
         } else if ((((appData.your_money - waste)/30)>=10000 )) {console.log( 'высокий бюджет' );
        }else { console.log('произошла ошибка');
        
        }
    },
    checkSavings:function(){
       if (appData.savings==true){
           let save =+prompt('Какова сумма накомлений',''),
           percent=+('Под  какой процент','');
           appData.monthIncome=save/100/12+percent;
           alert('Доход в месяц с вашего депозита: '+appData.monthIncome);
       } 
    },
    chooseOptExpenses:function(){
        for(let i=1;i<3;i++){
            let opt=prompt('','');
            appData.optionalExpenses[i]=opt;
        }
    },
    chooseIncome:function(){
        let itemes=prompt('Что принесет доп. доход( обязательно через запчтую)','');
        appData.income=itemes.split(',');
    }
};


 
//поменять промпт на инпут в html --  не могу т.к не знаю как потом управлять этой переменной 
//master -> (checkout -b 'имя ветки новой') 