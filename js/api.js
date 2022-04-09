// import {setupMap} from './map.js';
// import {ads} from './data.js';

const getData = (onSuccess) => {
	fetch('https://25.javascript.pages.academy/keksobooking/data')
		.then((response) => {
			if (response.ok) {
				console.log('is ok');
				return response.json();
			}

			throw new Error('isn\'t ok');
		})
		.then((data) => {
			console.log(data);
			onSuccess(data);
		});
};

// const sendData = () => {};

export {getData};