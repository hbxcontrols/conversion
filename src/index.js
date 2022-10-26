module.exports = {

	calculationObject: {
		value: null,
		unit: null,
		symbol: null
	},

	calculationFormat: {
		btu: 'BTU',
		bar: 'bar',
		gal: 'gal',
		ccf: 'CCF',
		gj: 'Gj',
		gpm: 'GPM',
		kpa: 'kPa',
		kw: 'kW',
		kbtu: 'kBTU',
		l: 'L',
		lpm: 'LPM',
		m3: 'm3',
		mw: 'MW',
		psi: 'psi',
		thm: 'thm',
		c: 'C',
		f: 'F'
	},

	formatUnit: function (unit) {
		if(!this.calculationFormat[unit.toLowerCase()]) throw new Error(`Invalid unit type ${unit}.`)
		return this.calculationFormat[unit.toLowerCase()]
	},

	roundTo: function(val, decimals) {
		return (Math.round(val * 100) / 100).toFixed(decimals)
	},

	volume: function(value, measurement) {
		switch(measurement.toLowerCase()) {
			case 'gal':
				return {
					...this.calculationObject,
					value,
					unit: this.formatUnit(measurement)
				}

			case 'l':
				return {
					...this.calculationObject,
					value: value * 3.785412,
					unit: this.formatUnit(measurement)
				}

			case 'm3':
				return {
					...this.calculationObject,
					value: value / 264.172,
					unit: this.formatUnit(measurement)
				}

			case 'ccf':
				return {
					...this.calculationObject,
					value: value / 748,
					unit: this.formatUnit(measurement)
				}

			default:
				return {
					...this.calculationObject,
					value,
					unit: this.formatUnit(measurement)
				}
		}
	},




	flow: function(value, measurement) {
		switch(measurement.toLowerCase()) {
			case 'gpm':
				return {
					...this.calculationObject,
					value,
					unit: this.formatUnit(measurement)
				}

			case 'lpm':
				return {
					...this.calculationObject,
					value: value * 3.785412,
					unit: this.formatUnit(measurement)
				}

			default:
				return {
					...this.calculationObject,
					value,
					unit: this.formatUnit(measurement)
				}
		}
	},




	energy: function(value, measurement) {
		switch(measurement.toLowerCase()) {
			case 'kbtu':
				return {
					...this.calculationObject,
					value: value / 1000,
					unit: this.formatUnit(measurement)
				}

			case 'btu':
				return {
					...this.calculationObject,
					value: value,
					unit: this.formatUnit(measurement)
				}

			case 'gj':
				return {
					...this.calculationObject,
					value: value / 947817,
					unit: this.formatUnit(measurement)
				}

			case 'kw':
				return {
					...this.calculationObject,
					value: value / 3412.141633,
					unit: this.formatUnit(measurement)
				}

			case 'mw':
				return {
					...this.calculationObject,
					value: value / 3412141.633,
					unit: this.formatUnit(measurement)
				}

			case 'thm':
				return {
					...this.calculationObject,
					value: value / 99976,
					unit: this.formatUnit(measurement)
				}

			default:
				return {
					...this.calculationObject,
					value,
					unit: this.formatUnit(measurement)
				}
		}
	},




	pressure: function(value, measurement) {
		switch(measurement.toLowerCase()) {
			case 'bar':
				return {
					...this.calculationObject,
					value: value / 14.5037,
					unit: this.formatUnit(measurement)
				}

			case 'kpa':
				return {
					...this.calculationObject,
					value: value * 6.895,
					unit: this.formatUnit(measurement)
				}

			case 'psi':
				return {
					...this.calculationObject,
					value,
					unit: this.formatUnit(measurement)
				}

			default:
				return {
					...this.calculationObject,
					value,
					unit: this.formatUnit(measurement)
				}
		}
	},




	temperature: function(value, measurement) {
		switch(measurement.toLowerCase()) {
			case 'c':
				return {
					...this.calculationObject,
					value: (value - 32) / 1.8,
					symbol: '°',
					unit: this.formatUnit(measurement)
				}

			case 'f':
				return {
					...this.calculationObject,
					value,
					symbol: '°',
					unit: this.formatUnit(measurement)
				}

			default:
				return {
					...this.calculationObject,
					value,
					symbol: '°',
					unit: this.formatUnit(measurement)
				}
		}
	}
}
