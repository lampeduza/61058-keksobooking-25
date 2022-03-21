const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__pristine',
  errorClass: 'ad-form__pristine--invalid',
  successClass: 'ad-form__pristine--valid',
  errorTextParent: 'ad-form__pristine',
  errorTextTag: 'p',
  errorTextClass: 'ad-form__pristine-help'
});

const titleField = adForm.querySelector('#title');
const priceField = adForm.querySelector('#price');
const roomField = adForm.querySelector('#room_number');
const capacityField = adForm.querySelector('#capacity');
const typeField = adForm.querySelector('#type');
const timeInField = adForm.querySelector('#timein');
const timeOutField = adForm.querySelector('#timeout');

const roomOption = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

const typeOption = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const getTitleErrorMessage = () => 'от 30 до 100 символов';

const getRoomErrorMessage = () => {
  switch (roomField.value) {
    case '1':
      return `${roomField.value} комната для 1 гостя`;
    case '2':
      return `${roomField.value} комнаты для 1 - 2 гостей`;
    case '3':
      return `${roomField.value} комнаты для 1, 2, или 3 гостей`;
    case '100':
      return `${roomField.value} не для гостей`;
  }
};

const setTime = (evt, timeField) => {
  const value = evt.target.value;

  timeField.value = value;
};

const getPriceErrorMessage = () => `от ${typeOption[typeField.value]} до 100000`;

const getMinimalPrice = () => {
  priceField.placeholder = typeOption[typeField.value];
  priceField.value = '';
};

const validateTitleField = (value) => value.length >= 30 && value.length <= 100;
const validatePriceField = (value) => value >= typeOption[typeField.value] && value <= 100000;
const validateRoomField = (value) => roomOption[value].includes(capacityField.value);

pristine.addValidator(titleField, validateTitleField, getTitleErrorMessage);
pristine.addValidator(priceField, validatePriceField, getPriceErrorMessage);
pristine.addValidator(roomField, validateRoomField, getRoomErrorMessage);

adForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

roomField.addEventListener('change', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

capacityField.addEventListener('change', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

typeField.addEventListener('change', () => {
  getMinimalPrice();
  pristine.validate();
});

timeInField.addEventListener('change', (evt) => {
  setTime(evt, timeOutField);
});

timeOutField.addEventListener('change', (evt) => {
  setTime(evt, timeInField);
});

window.addEventListener('load', () => {
  getMinimalPrice();
});

export {adForm, pristine};
