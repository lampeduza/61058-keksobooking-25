import {adForm, priceField} from './validation.js';

const priceSlider = adForm.querySelector('.ad-form__slider');

noUiSlider.create(priceSlider, {
  start: 0,
  step: 1,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 100000,
  },
});

const onPriceSliderUpdate = () => {
  priceField.value = parseInt(priceSlider.noUiSlider.get(), 10);
};

const onPriceFieldInput = () => {
  priceSlider.noUiSlider.set(priceField.value);
};

const activateInterfaceFeatures = () => {
  priceSlider.noUiSlider.on('slide', onPriceSliderUpdate);
  priceField.addEventListener('input', onPriceFieldInput);
};

const deactivateInterfaceFeatures = () => {
  priceSlider.noUiSlider.off('slide', onPriceSliderUpdate);
  priceField.removeEventListener('input', onPriceFieldInput);
};

adForm.addEventListener('reset', () => {
  priceSlider.noUiSlider.updateOptions({
    start: 0,
  });
});

export {activateInterfaceFeatures, deactivateInterfaceFeatures};
