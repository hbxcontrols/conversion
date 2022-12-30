const precision = require('number-precision')
precision.enableBoundaryChecking(false)

module.exports = {
	/**
	 * Return a measurement object
	 * @param {String} unit Type of measurement to return
	 * @returns Object of measurement type
	 */
	type(unit) {
		return (this.types[unit]) ? this.types[unit] : null
	},

	/**
	 * Round the current value to a precision point
	 * @param {Number} val Value to be rounded
	 * @param {Number} decimals Number of decimal places to return
	 * @returns this
	 */
	round (value = 0, decimals = 2) {
		return precision.round(value, decimals)
	},

	/**
	 * Backwards compatibility methods for v1 of this module
	 * @param {Number} val
	 * @param {String} unit
	 * @returns Conversion object
	 */
	volume: function(val = 0, unit) { return { value: this.type(unit).convert(val) }},
	flow: function(val = 0, unit) { return { value: this.type(unit).convert(val) }},
	energy: function(val = 0, unit) { return { value: this.type(unit).convert(val) }},
	temperature: function(val = 0, unit) { return { value: this.type(unit).convert(val) }},
	pressure: function(val = 0, unit) { return { value: this.type(unit).convert(val) }},

	types: {
		// Volume
		gal: { // Default
			singularName: 'Gallon',
			pluralName: 'Gallons',
			safeName: 'gal',
			unit: 'gal',
			symbol: null,
			symbolHTML: null,
			type: 'volume',
			convert: (val = 0) => val
		},
		l: {
			singularName: 'Litre',
			pluralName: 'Litres',
			safeName: 'l',
			unit: 'L',
			symbol: null,
			symbolHTML: null,
			type: 'volume',
			convert: (val = 0) => val * 3.785412
		},
		m3: {
			singularName: 'Cubic Metre',
			pluralName: 'Cubic Metres',
			safeName: 'm3',
			unit: 'm3',
			symbol: null,
			symbolHTML: null,
			type: 'volume',
			convert: (val = 0) => val / 264.172
		},
		ccf: {
			singularName: 'One-hundred Cubic-feet',
			pluralName: 'One-hundred Cubic-feet',
			safeName: 'ccf',
			unit: 'ccf',
			symbol: null,
			symbolHTML: null,
			type: 'volume',
			convert: (val = 0) => val / 748
		},
		// Flow
		gpm: { // Default
			singularName: 'Gallons per minute',
			pluralName: 'Gallons per minute',
			safeName: 'gpm',
			unit: 'gpm',
			symbol: null,
			symbolHTML: null,
			type: 'flow',
			convert: (val = 0) => val
		},
		lpm: {
			singularName: 'Litres per minute',
			pluralName: 'Litres per minute',
			safeName: 'lpm',
			unit: 'LPM',
			symbol: null,
			symbolHTML: null,
			type: 'flow',
			convert: (val = 0) => val * 3.785412
		},
		// Energy
		btu: { // Default
			singularName: 'British Thermal Unit',
			pluralName: 'British Thermal Units',
			safeName: 'btu',
			unit: 'btu',
			symbol: null,
			symbolHTML: null,
			type: 'energy',
			convert: (val = 0) => val
		},
		kbtu: {
			singularName: 'One-thousand British Thermal Units',
			pluralName: 'One-thousand British Thermal Units',
			safeName: 'kbtu',
			unit: 'kBTU',
			symbol: null,
			symbolHTML: null,
			type: 'energy',
			convert: (val = 0) => val / 1000
		},
		gj: {
			singularName: 'Gigajoule',
			pluralName: 'Gigajoules',
			safeName: 'gj',
			unit: 'Gj',
			symbol: null,
			symbolHTML: null,
			type: 'energy',
			convert: (val = 0) => val / 947817
		},
		kw: {
			singularName: 'Kilowatt',
			pluralName: 'Kilowatts',
			safeName: 'kw',
			unit: 'kW',
			symbol: null,
			symbolHTML: null,
			type: 'energy',
			convert: (val = 0) => val / 3412.141633
		},
		mw: {
			singularName: 'Megawatt',
			pluralName: 'Megawatts',
			safeName: 'mw',
			unit: 'MW',
			symbol: null,
			symbolHTML: null,
			type: 'energy',
			convert: (val = 0) => val / 3412141.633
		},
		thm: {
			singularName: 'Therm',
			pluralName: 'Therms',
			safeName: 'thm',
			unit: 'thm',
			symbol: null,
			symbolHTML: null,
			type: 'energy',
			convert: (val = 0) => val / 99976
		},
		// Pressure
		psi: { // Default
			singularName: 'Pound per Square Inch',
			pluralName: 'Pounds per Square Inch',
			safeName: 'psi',
			unit: 'PSi',
			symbol: null,
			symbolHTML: null,
			type: 'pressure',
			convert: (val = 0) => val
		},
		bar: {
			singularName: 'Bar',
			pluralName: 'Bar',
			safeName: 'bar',
			unit: 'bar',
			symbol: null,
			symbolHTML: null,
			type: 'pressure',
			convert: (val = 0) => val / 14.5037
		},
		kpa: {
			singularName: 'Kilopascal',
			pluralName: 'Kilopascals',
			safeName: 'kpa',
			unit: 'kPa',
			symbol: null,
			symbolHTML: null,
			type: 'pressure',
			convert: (val = 0) => val * 6.895
		},
		// Temperature
		f: { // Default
			singularName: 'Fahrenheit',
			pluralName: 'Fahrenheit',
			safeName: 'f',
			unit: 'F',
			symbol: '°',
			symbolHTML: '&deg;',
			type: 'temperature',
			convert: (val = 0) => val
		},
		c: {
			singularname: 'Celcius',
			pluralName: 'Celcius',
			safeName: 'c',
			unit: 'C',
			symbol: '°',
			symbolHTML: '&deg;',
			type: 'temperature',
			convert: (val = 0) => (val - 32) / 1.8
		}
	}
}
