(function () {
let  radius   
do {
    radius = +prompt('Please, enter the radius of the circle.')
}  while(isNaN(radius))
radius = Math.abs(radius)
        
document.write(`
The square of the circle is ${((Math.pow(radius, 2)) * Math.PI).toFixed(1)}
         (m2)
         `)
})()