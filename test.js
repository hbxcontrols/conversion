const convert = require('./src')

console.log(convert.volume(1, 'gal'))
console.log(convert.volume(1, 'L'))
console.log(convert.volume(1, 'm3'))

console.log(convert.flow(1, 'gpm'))
console.log(convert.flow(1, 'lpm'))

console.log(convert.energy(1, 'btu'))
console.log(convert.energy(1, 'mw'))
console.log(convert.energy(1, 'kw'))
console.log(convert.energy(1, 'gj'))
console.log(convert.energy(1, 'thm'))

console.log(convert.temperature(1, 'C'))
console.log(convert.temperature(1, 'F'))

console.log(convert.pressure(1, 'bar'))
console.log(convert.pressure(1, 'kpa'))
console.log(convert.pressure(1, 'psi'))
