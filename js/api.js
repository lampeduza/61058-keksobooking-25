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

const tryAgainButton = errorTemplate.querySelector('.error__button');

const showMessage = (template) => document.body.append(template);


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
        // Показать попап об успешной отправке данных
        // Сообщение должно исчезать по нажатию на клавишу Esc и по клику на произвольную область экрана (window)
        // Нужно удалять обработчики
        showMessage(successTemplate);
        closeMessage(successTemplate);
        console.log('show successful message');
        return;
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .catch((err) => {
      // Показать попап об ошибке отправке данных
      // Сообщение должно исчезать после нажатия на .error__button,
      // по нажатию на Esc и по клику на произвольную область экрана (window)
      // + сохранить данные для повторной отправки формы
      showMessage(errorTemplate);
      closeMessage(errorTemplate);
      console.log(err);
    });
};


/* listeners' callbacks */
const onDocumentClick = (template) => {
  template.remove();
}

const onEscKeydown = (template, evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    template.remove();
  }
}
/* end listeners' callbacks */


const closeMessage = (template) => {
  document.addEventListener('click', () => {
    onDocumentClick(template);
  });

  document.addEventListener('keydown', (evt) => {
    onEscKeydown(template, evt);
  });
};


export {getData, sendData};
