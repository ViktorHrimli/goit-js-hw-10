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
    clearHTMLList();
    return;
  }
  // Fetch
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
  countries.map(item => {
    const {
      name: { official },
      flags: { svg },
    } = item;
    renderList(official, svg);
  });
}

function infoCountry(country) {
  const {
    name: { official },
    flags: { svg },
    languages,
    capital,
    population,
  } = country[0];
  const value = Object.values(languages);
  refs.countryInfo.insertAdjacentHTML(
    'afterbegin',
    createCountryInfo(official, svg, value, capital, population)
  );
}

function renderList(country, img) {
  refs.countryList.insertAdjacentHTML(
    'afterbegin',
    createListCountry(country, img)
  );
}

// listeners
refs.input.addEventListener('input', _(listenInput, DEBOUNCE_DELAY));
