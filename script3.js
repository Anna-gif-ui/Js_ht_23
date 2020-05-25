(function () {
    'use strict'
     
let sideLength
do {
    sideLength  = +prompt('Please, enter the length of the square side.')
} while(isNaN(sideLength))
sideLength = Math.abs(sideLength)   

document.write(`
The perimetr of the square with 
the side ${(sideLength)} is ${(sideLength * 4).toFixed(1)}
`)

})()