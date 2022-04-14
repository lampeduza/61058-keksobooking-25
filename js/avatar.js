import {adForm} from './validation.js';
import {FILE_TYPES} from './data.js';

// Выбор Аватарки (загрузка аватарки)
const imageChooser = adForm.querySelector('input[name="avatar"]');
const previewArea = adForm.querySelector('.ad-form-header__preview img');

imageChooser.addEventListener('change', () => {
	const image = imageChooser.files[0];
	const imageName = image.name.toLowerCase();

	const matches = FILE_TYPES.some((it) => imageName.endsWith(it));

	if (matches) {
		previewArea.src = URL.createObjectURL(image);
	}
});

// Выбор фотографии жилья (загрузка фотография жилья)