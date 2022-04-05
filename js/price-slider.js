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

const onPriceSliderUpdate = () => {
  priceField.value = parseInt(priceSlider.noUiSlider.get(), 10);
};

const onTypeFieldChange = (evt) => {
  priceSlider.noUiSlider.set(typeOption[evt.target.value]);
};

const onPriceFieldInput = () => {
  priceSlider.noUiSlider.set(priceField.value);
};

const activateInterfaceFeatures = () => {
  priceSlider.noUiSlider.on('update', onPriceSliderUpdate);
  typeField.addEventListener('change', onTypeFieldChange);
  priceField.addEventListener('input', onPriceFieldInput);
};

const deactivateInterfaceFeatures = () => {
  priceSlider.noUiSlider.off('update', onPriceSliderUpdate);
  typeField.removeEventListener('change', onTypeFieldChange);
  priceField.removeEventListener('input', onPriceFieldInput);
};

adForm.addEventListener('reset', () => {
  priceSlider.noUiSlider.updateOptions({
    start: 1000,
  });
});

export {activateInterfaceFeatures, deactivateInterfaceFeatures};
