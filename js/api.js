import {adForm} from './validation.js';
import {SHOW_ALERT_TIME} from './data.js';

const getData = (onSuccess) => {
	fetch('https://25.javascript.pages.academy/keksobooking/data')
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
		})
		.then((data) => onSuccess(data));
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
				// Показать попап об успешной отправке данных
				showMessage(successTemplate);
				console.log('show successful message');
				return;
			}

			throw new Error(`${response.status} ${response.statusText}`);
		})
		.catch((err) => {
			// Показать попап об ошибке отправке данных
			showMessage(errorTemplate);
			console.log('show error message');
		});
};

const successTemplate = document.querySelector('#success')
	.content
	.querySelector('.success');

const errorTemplate = document.querySelector('#error')
	.content
	.querySelector('.error');

const addStyles = (template) => {
	template.style.zindex = 100;
	template.style.position = 'absolute';
	template.style.left = 0;
	template.style.right = 0;
	template.style.top = 0;
};

const showMessage = (template) => {
	addStyles(template);

	document.body.append(template);
};

export {getData, sendData};