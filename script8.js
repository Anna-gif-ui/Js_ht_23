(function () {
    'use strict'
     
     let sum
     do {
        sum = +prompt('Введите сумму денег, которую вы готовы потратить на шоколадку, грн')
     } while(isNaN(sum))
     sum = Math.abs(sum)

     let price
     do {
        price = +prompt('Введите стоимость шоколадки, грн')
     } while(isNaN(price) || price === 0)
     price = Math.abs(price)

     let amount = (Math.floor(sum / price))


     document.write(`
     Вы можете приобрести шоколадок в количестве
     ${amount} 
     шт, ваша сдача составит
     ${(sum - (price * amount)).toFixed(2)} грн
    `)

 })()