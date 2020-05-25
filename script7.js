(function () {
    'use strict'
     
     let GigaBytes
     do{
         GigaBytes = +prompt('Введите объем флешки в Гб:')
     }while(isNaN(GigaBytes))
     GigaBytes = Math.abs(GigaBytes)

     document.write(`
     На вашу флешку поместится  
     ${(Math.floor((GigaBytes * 1024) / 820))} 
     файлов размером 820 Мб
    `)

 })()