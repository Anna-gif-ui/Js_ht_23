(function () {
    'use strict'
     
     let sumDollars
     do{
        sumDollars = +prompt('Введите сумму в USD:')
     }while(isNaN(sumDollars))
     sumDollars = Math.abs(sumDollars)

     const exchRate = 0.9034
     
     document.write(`
     ваша сумма в EUR составляет 
     ${(sumDollars * exchRate).toFixed(2)} 
     EUR
    `)

 })()