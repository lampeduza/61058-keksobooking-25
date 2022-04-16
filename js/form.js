import {activateInterfaceFeatures, deactivateInterfaceFeatures} from './price-slider.js';

const forms = document.forms;

const changeInterfaceState = (enabled) => {

  for (const form of forms) {
    for (const element of form.children) {
      element.disabled = enabled;
    }

    if (form.classList.contains('map__filters')) {
      form.classList.toggle('map__filters--disabled', enabled);
      continue;
    }

    if (form.classList.contains('ad-form')) {
      form.classList.toggle('ad-form--disabled', enabled);

      const slider = form.querySelector('.ad-form__slider');
      slider.classList.toggle('ad-form__slider--disabled', enabled);
      slider.disabled = enabled;
      continue;
    }
  }

  if (enabled) {
    deactivateInterfaceFeatures();
  } else {
    activateInterfaceFeatures();
  }
};

const enableInterface = () => changeInterfaceState(false);
const disableInterface = () => changeInterfaceState(true);

export {disableInterface, enableInterface, forms};
