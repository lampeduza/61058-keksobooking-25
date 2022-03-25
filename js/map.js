import {enableInterface} from './form.js';
import {adForm} from './validation.js';
import {getObjects} from './data.js';

const map = L.map('map-canvas')
	.on('load', () => {

		// Задача : Разблокировать интерфейс при инициализации карты
		// Изначально он заблокирован
		console.log('Карта инициализирована');
		enableInterface();
	})
	.setView(
		{
			lat: 35.67500,
			lng: 139.75000,
		}, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon(
	{
		iconUrl: '../img/main-pin.svg',
		iconSize: [52, 52],
		iconAnchor: [26, 52],
	}
);

const mainPinMarker = L.marker(
	{
		lat: 35.67500,
		lng: 139.75000,
	},
	{
		draggable: true,
		icon: mainPinIcon,
	},
);

mainPinMarker.addTo(map);

// Задача : Выбор адреса. Получаем адрес. Адрес нужно связать с полем "Адрес"
mainPinMarker.on('moveend', (evt) => {
	console.log(evt.target.getLatLng());
});

const pinIcon = L.icon(
	{
		iconUrl: '../img/pin.svg',
		iconSize: [40, 40],
		iconAnchor: [20, 40],
	}
);

// Возврат пина и карты в начальное состояние
const resetButton = adForm.querySelector('.ad-form__reset');

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng({lat: 35.67500,lng: 139.75000,});
  map.setView({lat: 35.67500, lng: 139.75000,}, 13);
});

// Объявил новую переменную, которая будет генерировать пины
const objectsArray = getObjects();
console.log(objectsArray);

objectsArray.forEach((objectArray) => {
	const location = objectArray.location;

	const pinMarker = L.marker(
		{
			lat: location.lat,
			lng: location.lng,
		},
		{
			icon: pinIcon,
		},
	);

  pinMarker.addTo(map);
});