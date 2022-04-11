import {adForm} from './validation.js';
import {isEscapeKey} from './util.js';
// import {SHOW_ALERT_TIME} from './data.js';

// get
const getData = (onSuccess) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => onSuccess(data));
};

// send
const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const button = errorTemplate.querySelector('.error__button');

const onSuccessWindowClick = () => {
  closeSuccessMessage();
};

const onSuccessWindowKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeSuccessMessage();
  }
};

const onErrorWindowClick = () => {
  closeErrorMessage();
};

const onErrorWindowKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeErrorMessage();
  }
};

const onButtonClick = () => {
  closeErrorMessage();
};

const closeSuccessMessage = () => {
  successTemplate.remove();
  window.removeEventListener('click', onSuccessWindowClick);
  window.removeEventListener('keydown', onSuccessWindowKeydown);
};

const closeErrorMessage = () => {
  errorTemplate.remove();
  window.removeEventListener('click', onErrorWindowClick);
  window.removeEventListener('keydown', onErrorWindowKeydown);
  button.removeEventListener('click', onButtonClick);
};

const showSuccessMessage = () => {
  document.body.append(successTemplate);

  window.addEventListener('click', onSuccessWindowClick);
  window.addEventListener('keydown', onSuccessWindowKeydown);
};

const showErrorMessage = () => {
  document.body.append(errorTemplate);

  window.addEventListener('click', onErrorWindowClick);
  window.addEventListener('keydown', onErrorWindowKeydown);

  if (!button) {
    return;
  }

  button.addEventListener('click', onButtonClick);
};

const sendData = () => {
  fetch('https://25.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      credentials: 'same-origin',
      body: new FormData(adForm),
    },
  )

    .then((response) => {
      if (response.ok) {
        showSuccessMessage();
        return;
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .catch(() => {
      // сохранить данные для повторной отправки формы
      showErrorMessage();
    });
};

export {getData, sendData};
