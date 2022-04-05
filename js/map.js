import {disableInterface, enableInterface} from './form.js';
import {activateInterfaceFeatures, deactivateInterfaceFeatures} from './price-slider.js';
import {adForm} from './validation.js';
import {renderAd} from './ads.js';

const setupMap = (ads) => {
  disableInterface();

const map = L.map('map-canvas')
  .on('load', () => {
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

const inputAddress = adForm.querySelector('input[name="address"]');

mainPinMarker.on('moveend', (evt) => {
  const location = evt.target.getLatLng();
  inputAddress.value = `${location.lat.toFixed(5)} ${location.lng.toFixed(5)}`;
});

const pinIcon = L.icon(
  {
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  }
);

  ads.forEach((ad) => {
    const location = ad.location;

    const pinMarker = L.marker(
      {
        lat: location.lat,
        lng: location.lng,
      },
      {
        icon: pinIcon,
      },
    );

    pinMarker.addTo(map).bindPopup(renderAd(ad));
  });
};

export {setupMap};
