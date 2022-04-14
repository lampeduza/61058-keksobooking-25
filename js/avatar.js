import {adForm} from './validation.js';
import {FILE_TYPES} from './data.js';

// Выбор Аватарки (загрузка аватарки)
const chooseAvatar = () => {
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
};

const previewApartmentArea = adForm.querySelector('.ad-form__photo');
const apartmentImage = document.createElement('img');

// Функция для создания фотографии жилья
const createPhoto = () => {
  // create an image
  apartmentImage.classList.add('ad-form__photo-apartment');
  apartmentImage.width = 70;
  apartmentImage.height = 70;
  previewApartmentArea.append(apartmentImage);
};

// Выбор фотографии жилья (загрузка фотография жилья)
const chooseApartmentPhoto = () => {
  createPhoto();
  // input
  const apartmentChooser = adForm.querySelector('input[name="images"]');

  apartmentChooser.addEventListener('change', () => {
    const image = apartmentChooser.files[0];
    const apartmentImageName = image.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => apartmentImageName.endsWith(it));

    if (matches) {
      apartmentImage.src = URL.createObjectURL(image);
      apartmentImage.alt = 'Фотография жилья';
    }
  });
};

export {chooseAvatar, chooseApartmentPhoto};
