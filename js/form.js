// В задаче пишут, что (все пункты должны быть заблокированы, кроме первого, про карту) как это понимать?
// DISABLE INTERFACE
const disableInterface = () => {
  // filter form
  const filtersForm = document.querySelector('.map__filters');
  filtersForm.classList.add('map__filters--disabled');

  const filterFormElements = filtersForm.querySelector('.map__features');
  filterFormElements.disabled = true;

  // ad form
  const adForm = document.querySelector('.ad-form');
  adForm.classList.add('ad-form--disabled');

  const adFormElements = adForm.querySelectorAll('fieldset');

  // Почему нельзя использовать вот такой метод? Пишет "Arrow function should not return assignment no-return-assign"
  // adFormElements.forEach((element) => element.disabled = false);
  /* А вот этот метод менее красив, но его можно
  adFormElements.forEach((element) => {
    element.disabled = false;
  });
  */

  for (const adFormElement of adFormElements) {
    adFormElement.disabled = true;
  }

  // Как можно заблокировать обычный div? Это же div. Я так понял, класс сюда disabled не нужно добавлять.
  // Если по сути, то я родителя заблокировал, зачем какой - то контейнер блокировать?
  // А еще, хоть я и заблокировал div, но в разметке этого атрибута нет.. Я полагаю, что у div'a нету этой фишки, focus, по этому и нет атрибута в DOM?
  // Его браузер не отображат, хотя, когда я вывожу его в консоль, он выводится как объект, я его открываю и там написано slider disabled: true. что?))
  const slider = adForm.querySelector('.ad-form__slider');
  slider.classList.add('ad-form__slider--disabled');
  slider.disabled = true;
};

// ENABLE INTERFACE
const enableInterface = () => {
  const filtersForm = document.querySelector('.map__filters');
  filtersForm.classList.remove('map__filters--disabled');

  const filterFormElements = filtersForm.querySelector('.map__features');
  filterFormElements.disabled = false;

  const adForm = document.querySelector('.ad-form');
  adForm.classList.remove('ad-form--disabled');

  const adFormElements = adForm.querySelectorAll('fieldset');

  for (const adFormElement of adFormElements) {
    adFormElement.disabled = false;
  }

  const slider = adForm.querySelector('.ad-form__slider');
  slider.classList.remove('ad-form__slider--disabled');
  slider.disabled = false;
};

export {disableInterface, enableInterface};
