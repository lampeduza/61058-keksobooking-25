import {adForm, priceField, typeField} from './validation.js';

const priceSlider = adForm.querySelector('.ad-form__slider');

noUiSlider.create(priceSlider, {
	start: [1000],
	step: 1,
	connect: 'lower',
	range: {
		'min': 0,
		'max': 100000,
	},
	format: {
		to: function (value) {
		if (Number.isInteger(value)) {
			return value.toFixed(0);
		}

		return value.toFixed(1);
	},
	from: function (value) {
		return parseFloat(value);
	},
	},
});

priceSlider.noUiSlider.on('update', (...rest) => {
	priceField.value = priceSlider.noUiSlider.get();
});

typeField.addEventListener('change', (evt) => {
	if (evt.target.checked) {
		priceSlider.noUiSlider.updateOptions({

		});
	}
});