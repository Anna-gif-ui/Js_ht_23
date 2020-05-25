(function () {
    'use strict'
     
     let distance
     do {
         distance = +prompt('Введите расстояние между городами в км')
     } while(isNaN(distance))
     distance = Math.abs(distance)
    
 
     let time
     do {
         time = +prompt('Введите время')
     } while(isNaN(time) || time === 0)
     time = Math.abs(time)
     
 
    //  document.write('Cкорость, с которой необходимо двигаться ' + (distance / time).toFixed(1) + ' км/час')
     document.write(`
     Cкорость, с которой необходимо 
     двигаться ${(distance / time).toFixed(1)}
     (км/час)
     `)
 
 })()