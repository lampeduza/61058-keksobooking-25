import {adForm} from './validation.js';
import {isEscapeKey} from './util.js';
import {disableInterface, enableInterface} from './form.js';
import {mapFilters} from './filter.js';

const dataError = document.querySelector('.data-error');

const showDataError = () => {
  dataError.classList.add('data-error--showed');

  setTimeout(() => {
    dataError.classList.remove('data-error--showed');
  }, 5000);
};

const getData = (onSuccess) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Не удалось загрузить данные');
    })
    .then((data) => {
      onSuccess(data);
      enableInterface(mapFilters);
    })
    .catch(() => {
      disableInterface(mapFilters);
      showDataError();
    });
};

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

function closeSuccessMessage() {
  successTemplate.remove();
  window.removeEventListener('click', onSuccessWindowClick);
  window.removeEventListener('keydown', onSuccessWindowKeydown);
}

function closeErrorMessage() {
  errorTemplate.remove();
  window.removeEventListener('click', onErrorWindowClick);
  window.removeEventListener('keydown', onErrorWindowKeydown);
  button.removeEventListener('click', onButtonClick);
}

function showSuccessMessage() {
  document.body.append(successTemplate);

  window.addEventListener('click', onSuccessWindowClick);
  window.addEventListener('keydown', onSuccessWindowKeydown);
}

function showErrorMessage() {
  document.body.append(errorTemplate);

  window.addEventListener('click', onErrorWindowClick);
  window.addEventListener('keydown', onErrorWindowKeydown);

  if (!button) {
    return;
  }

  button.addEventListener('click', onButtonClick);
}

const sendData = (callback) => {
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
        callback();
        return;
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .catch(() => {
      showErrorMessage();
    });
};

export {getData, sendData};
