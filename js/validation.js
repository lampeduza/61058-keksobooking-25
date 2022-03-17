const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  // title
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

const roomOption = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

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

const validateTitleField = (value) => value.length >= 30 && value.length <= 100;
const validatePriceField = (value) => value >= 0 && value <= 100000;

// 'value' is defined but never used no-used-vars (хотя использую же)
const validateRoomField = (value) => roomOption[roomField.value].includes(capacityField.value);

pristine.addValidator(titleField, validateTitleField, 'от 30 до 100 символов');
pristine.addValidator(priceField, validatePriceField, 'от 0 до 100000');
pristine.addValidator(roomField, validateRoomField, getRoomErrorMessage);
// pristine.addValidator(capacityField, validateRoomField, getRoomErrorMessage);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

roomField.addEventListener('change', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

capacityField.addEventListener('change', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export {adForm, pristine};
