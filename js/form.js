// В задаче пишут, что (все пункты должны быть заблокированы, кроме первого, про карту) как это понимать?

// DISABLE INTERFACE
const disableInterface = () => {
  const forms = document.forms;

  for (const form of forms) {
    if (form.classList.contains('map__filters')) {
      form.classList.add('map__filters--disabled');
    }

    if (form.classList.contains('ad-form')) {
      form.classList.add('ad-form--disabled');
    }
  }

  const filterFormElements = forms[0].children;

  for (const filterFormElement of filterFormElements) {
    filterFormElement.disabled = true;
  }

  const adFormElements = forms[1].children;

  for (const adFormElement of adFormElements) {
    adFormElement.disabled = false;
  }

  const slider = forms[1].querySelector('.ad-form__slider');
  slider.classList.add('ad-form__slider--disabled');
  slider.disabled = true;
};


/// DISABLE INTERFACE
const enableInterface = () => {
  const forms = document.forms;

  for (const form of forms) {
    if (form.classList.contains('map__filters')) {
      form.classList.remove('map__filters--disabled');
    }

    if (form.classList.contains('ad-form')) {
      form.classList.remove('ad-form--disabled');
    }
  }

  const filterFormElements = forms[0].children;

  for (const filterFormElement of filterFormElements) {
    filterFormElement.disabled = false;
  }

  const adFormElements = forms[1].children;

  for (const adFormElement of adFormElements) {
    adFormElement.disabled = false;
  }

  const slider = forms[1].querySelector('.ad-form__slider');
  slider.classList.remove('ad-form__slider--disabled');
  slider.disabled = false;
};

export {disableInterface, enableInterface};
