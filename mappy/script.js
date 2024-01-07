'use strict';


// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//?? geo location API

navigator.geolocation?.getCurrentPosition(
  function (position) {
    const { longitude, latitude } = position.coords
    console.log(`https://www.google.co.in/maps/@${longitude},${latitude}`);


    const coords = [latitude, longitude]

const map = L.map('map').setView(coords, 17);
    // console.log(map);
    

L.tileLayer('https://tile.openstreetmap.fr/hot//{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

    
    map.on('click', function (mapEvent) {
      console.log(mapEvent);

      const { lat, lng } = mapEvent.latlng;
      const coo = [lat,lng]
      L.marker(coo).addTo(map)
        .bindPopup(L.popup({
          maxWidth: 250,
          minWidth: 150,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup'
        }))
        .setPopupContent('workout')
  .openPopup();
    })
  },
  function () {
    alert('Could not get your position');
  }
)


