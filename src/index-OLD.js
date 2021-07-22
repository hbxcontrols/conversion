module.exports = {
	volume(value, target) {
		const converted = createCalculationObject(value, 'GPM', 'G')
		if(target.toLowerCase() === 'lpm') {
			converted.value = value * 3.785412
			converted.unit = target
			converted.unit_accumulated = 'L'
		}

		return converted;
	},

	pressure(value, target) {
		const converted = createCalculationObject(value, 'PSI')
		if(target.toLowerCase() === 'bar') {
			converted.value = value / 14.5037;
			converted.unit = target
		}

		if(target.toLowerCase() === 'kpa') {
			converted.value = value * 6.895;
			converted.unit = target
		}

		return converted;
	},

	temperature(value, target) {
		// Defaults (data is returned from API in Fahrenheit)
		const converted = createCalculationObject(value, 'F', '°')
		if(target.toLowerCase() === 'c') {
			converted.value = (value - 32) / 1.8
			converted.unit = target
		}

		return converted;
	},

	energy(value, target) {
		const converted = createCalculationObject(value, 'BTU', 'BTU')
		
		switch(target.toLowerCase()) {
			case 'mw':
				converted.value = value * 0.00000029
				converted.unit = target
				converted.unit_accumulated = target
				break;
			case 'kw':
				converted.value = value / 3.412141633
				converted.unit = target
				converted.unit_accumulated = target
				break;
			case 'gj':
				converted.value = value / 947817
				converted.unit = target
				converted.unit_accumulated = target
				break;
			case 'therm':
				converted.value = value / 99976
				converted.unit = target
				converted.unit_accumulated = target
		}

		return converted
	}
}

function createCalculationObject (value, unit, unit_accumulated, symbol = null) {
	return {
		value: value,
		unit: unit,
		symbol: symbol,
		unit_accumulated: unit_accumulated || null
	}
}