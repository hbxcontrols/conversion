module.exports = {

	calculationObject: {
		value: null,
		unit: null,
		symbol: null
	},

	volume: (value, measurement) => {
		switch(measurement.toLowerCase()) {
			case 'gal':
				return {
					...this.calculationObject,
					value,
					unit: 'gal'
				}

			case 'l':
				return {
					...this.calculationObject,
					value: value * 3.785412,
					unit: 'L'
				}

			case 'm3':
				return {
					...this.calculationObject,
					value: value / 264.17,
					unit: 'm3'
				}

			default:
				return {
					...this.calculationObject,
					value,
					unit: 'gal'
				}
		}
	},




	flow: (value, measurement) => {
		switch(measurement.toLowerCase()) {
			case 'gpm':
				return {
					...this.calculationObject,
					value,
					unit: 'gpm'
				}

			case 'lpm':
				return {
					...this.calculationObject,
					value: value * 3.785412,
					unit: 'lpm'
				}

			default:
				return {
					...this.calculationObject,
					value,
					unit: 'gpm'
				}
		}
	},




	energy: (value, measurement) => {
		switch(measurement.toLowerCase()) {
			case 'btu':
				return {
					...this.calculationObject,
					value,
					unit: 'BTU'
				}

			case 'gj':
				return {
					...this.calculationObject,
					value: value / 947817,
					unit: 'Gj'
				}

			case 'kw':
				return {
					...this.calculationObject,
					value: value / 3.412141633,
					unit: 'kW'
				}

			case 'mw':
				return {
					...this.calculationObject,
					value: value * 0.00000029,
					unit: 'MW'
				}

			case 'thm':
				return {
					...this.calculationObject,
					value: value / 99976,
					unit: 'thm'
				}

			default:
				return {
					...this.calculationObject,
					value,
					unit: 'BTU'
				}
		}
	},




	pressure: (value, measurement) => {
		switch(measurement.toLowerCase()) {
			case 'bar':
				return {
					...this.calculationObject,
					value: value / 14.5037,
					unit: 'bar'
				}

			case 'kpa':
				return {
					...this.calculationObject,
					value: value * 6.895,
					unit: 'kPa'
				}

			case 'psi':
				return {
					...this.calculationObject,
					value,
					unit: 'psi'
				}

			default:
				return {
					...this.calculationObject,
					value,
					unit: 'psi'
				}
		}
	},




	temperature: (value, measurement) => {
		switch(measurement.toLowerCase()) {
			case 'c':
				return {
					...this.calculationObject,
					value: (value - 32) / 1.8,
					symbol: '0xC2',
					unit: 'C'
				}

			case 'f':
				return {
					...this.calculationObject,
					value,
					symbol: '0xC2',
					unit: 'F'
				}

			default:
				return {
					...this.calculationObject,
					value,
					symbol: '0xC2',
					unit: 'F'
				}
		}
	}
}
