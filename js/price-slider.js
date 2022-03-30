import {adForm, priceField, typeField, typeOption} from './validation.js';

const priceSlider = adForm.querySelector('.ad-form__slider');

noUiSlider.create(priceSlider, {
  start: 1000,
  step: 1,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 100000,
  },
});

priceSlider.noUiSlider.on('update', () => {
  priceField.value = parseInt(priceSlider.noUiSlider.get(), 10);
});

typeField.addEventListener('change', (evt) => {
  priceSlider.noUiSlider.set(typeOption[evt.target.value]);
});

priceField.addEventListener('input', () => {
  priceSlider.noUiSlider.set(priceField.value);
});
