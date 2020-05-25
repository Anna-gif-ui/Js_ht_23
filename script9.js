(function () {
    'use strict'
     
    let number = +prompt('Введите трехзначное число'),
        result = 0

      while (number) {
         result *= 10
         result += number % 10
         number = Math.floor(number / 10)
     }

    document.write(`${result}`)
 })()