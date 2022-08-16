export function createListCountry(country, svg) {
  return `
  <li class="list-country">
  <img width="30" height="30" src="${svg}" />
    <p class="text-country">${country}</p>
  </li>
    `;
}
