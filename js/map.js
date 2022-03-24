import {enableInterface} from './form.js';
import {adForm} from './validation.js';

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
		}, 10);

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

const pinMarker = L.marker(
	{
		lat: 35.70000,
		lng: 139.80000,
	},
	{
		draggable: true,
		icon: pinIcon,
	},
);

pinMarker.addTo(map);

// Задача : Выбор адреса. Получаем адрес. Адрес нужно связать с полем "Адрес"
pinMarker.on('moveend', (evt) => {
	console.log(evt.target.getLatLng());
});


// Очистка
// Возврат пина в начальное состояние
  const resetButton = adForm.querySelector('.ad-form__reset');

  resetButton.addEventListener('click', () => {
    mainPinMarker.setLatLng(
      {
        lat: 35.67500,
        lng: 139.75000,
      }
    );
  });