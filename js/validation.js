const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__title',
  errorClass: 'ad-form__title--invalid',
  successClass: 'ad-form__title--valid',
  errorTextParent: 'ad-form__title',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__text-help'
});

const validateTitle = (value) => value.length >= 30 && value.length <= 100;

// title
// (Нужно ли автоматизировать это?
// К примеру, сделать, чтобы в шаблонных строках из функции validateTitle брались значения min и max для 3 аргумента)
pristine.addValidator(adForm.querySelector('#title'), validateTitle, 'от 30 до 100 символов');

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export {adForm, pristine};
