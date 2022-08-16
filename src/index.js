import './css/styles.css';
import Notiflix from 'notiflix';
import * as _ from 'lodash.debounce';
import { fetchCountries } from './fetchCountries.js';
import { createListCountry } from './createList.js';
import { createCountryInfo } from './countryInfo';
import { refs } from './refs.js';

Notiflix.Notify.init({
  width: '380px',
  position: 'center-top',
  distance: '14px',
});
// CONST
const DEBOUNCE_DELAY = 300;
// //FUNC
function listenInput(event) {
  let sring = event.target.value;
  if (sring.trim() === '') {
    return;
  }

  fetchCountries(sring.trim()).then(data => {
    clearHTMLList();

    if (data.length === 1) {
      Notiflix.Notify.success('Correct name');
      return infoCountry(data);
    } else if (data.length > 1) {
      return fetchAnyCountries(data);
    }
  });
}

function clearHTMLList() {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}

function fetchAnyCountries(countries) {
  let fff = countries;
  fff.map(item => {
    const {
      name: { official },
      flags: { png },
    } = item;
    renderList(official, png);
  });
}

function renderList(country, img) {
  refs.countryList.insertAdjacentHTML(
    'afterbegin',
    createListCountry(country, img)
  );
}

function infoCountry(country) {
  const {
    name: { common },
    flags: { svg },
    languages,
    capital,
    population,
  } = country[0];
  const value = Object.values(languages);
  refs.countryInfo.insertAdjacentHTML(
    'afterbegin',
    createCountryInfo(common, svg, value, capital, population)
  );
}

// listeners
refs.input.addEventListener('input', _(listenInput, DEBOUNCE_DELAY));
