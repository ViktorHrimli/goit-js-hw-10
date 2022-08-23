import './css/styles.css';
import Notiflix from 'notiflix';
import * as _ from 'lodash.debounce';
import { enemyCountry } from './enemyCountry';
import { getDataCountries } from './fetchCountries.js';
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
  if (sring.trim() === '') return clearHTMLList();
  getDataCountries(sring.trim());
}

export function clearHTMLList() {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}

export function fetchAnyCountries(countries) {
  countries.map(item => {
    return renderList(item);
  });
}

export function infoCountry(country) {
  const { capital } = country[0];
  if (capital === 'Moscow') {
    return refs.countryInfo.insertAdjacentHTML(
      'afterbegin',
      enemyCountry(country)
    );
  }
  refs.countryInfo.insertAdjacentHTML('afterbegin', createCountryInfo(country));
}

function renderList(item) {
  refs.countryList.insertAdjacentHTML('afterbegin', createListCountry(item));
}

// listeners
refs.input.addEventListener('input', _(listenInput, DEBOUNCE_DELAY));
