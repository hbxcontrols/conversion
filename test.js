const convert = require('./src')

// console.log(convert.volume(4721, 'gal'))
// console.log(convert.volume(4721, 'L'))
// console.log(convert.volume(4721, 'm3'))

console.log(convert.flow(4721, 'gpm'))
console.log(convert.flow(4721, 'lpm'))

// console.log(convert.temperature(45, 'C'))
// console.log(convert.temperature(45, 'F'))

// console.log(convert.pressure(5, 'bar'))
// console.log(convert.pressure(5, 'kpa'))
// console.log(convert.pressure(5, 'psi'))

// console.log(convert.energy(545678, 'btu'))
// console.log(convert.energy(545678, 'mw'))
// console.log(convert.energy(545678, 'kw'))
// console.log(convert.energy(545678, 'gj'))
// console.log(convert.energy(545678, 'thm'))