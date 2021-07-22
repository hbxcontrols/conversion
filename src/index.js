module.exports = {
	volume: (value, measurement) => {
		const calculation = calculationObject()

		switch(measurement.toLowerCase()) {
			case 'gal':
				calculation.value = value
				calculation.unit = 'gal'
				return calculation
			case 'l':
				calculation.value = value * 3.785412
				calculation.unit = 'L'
				return calculation
			case 'm3':
				calculation.value = value / 264.17
				calculation.unit = 'm3'
				return calculation
			default:
				calculation.value = value
				calculation.unit = 'gal'
				return calculation
		}
	},




	flow: (value, measurement) => {
		const calculation = calculationObject()

		switch(measurement.toLowerCase()) {
			case 'gpm':
				calculation.value = value
				calculation.unit = 'gpm'
				return calculation
			case 'lpm':
				calculation.value = value * 3.785412
				calculation.unit = 'lpm'
				return calculation
			default:
				calculation.value = value
				calculation.unit = 'gpm'
				return calculation
		}
	},




	energy: (value, measurement) => {
		const calculation = calculationObject()

		switch(measurement.toLowerCase()) {
			case 'btu':
				calculation.value = value
				calculation.unit = 'BTU'
				return calculation
			case 'gj':
				calculation.value = value / 947817
				calculation.unit = 'Gj'
				return calculation
			case 'kw':
				calculation.value = value / 3.412141633
				calculation.unit = 'kW'
				return calculation
			case 'mw':
				calculation.value = value * 0.00000029
				calculation.unit = 'MW'
				return calculation
			case 'thm':
				calculation.value = value / 99976
				calculation.unit = 'thm'
				return calculation
			default:
				return calculation
		}
	},




	pressure: (value, measurement) => {
		const calculation = calculationObject()

		switch(measurement.toLowerCase()) {
			case 'bar':
				calculation.value = value / 14.5037
				calculation.unit = 'bar'
				return calculation
			case 'kpa':
				calculation.value = value * 6.895
				calculation.unit = 'kPa'
				return calculation
			case 'psi':
				calculation.value = value
				calculation.unit = 'psi'
				return calculation
			default:
				calculation.value = value
				calculation.unit = 'psi'
				return calculation
		}
	},




	temperature: (value, measurement) => {
		const calculation = calculationObject()

		// Set these values for any response
		calculation.symbol = "0xC2"

		switch(measurement.toLowerCase()) {
			case 'c':
				calculation.value = (value - 32) / 1.8
				calculation.unit = 'C'
				return calculation
			case 'f':
				calculation.value = value
				calculation.unit = 'F'
				return calculation
			default:
				calculation.value = value
				calculation.unit = 'F'
				return calculation
		}
	}
}




function calculationObject() {
	return {
		value: null,
		unit: null,
		symbol: null
	}
}