// import {setupMap} from './map.js';
// import {ads} from './data.js';

const getData = (onSuccess) => {
	fetch('https://25.javascript.pages.academy/keksobooking/data')
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
		})
		.then((data) => onSuccess(data));
};

// const sendData = () => {};

export {getData};