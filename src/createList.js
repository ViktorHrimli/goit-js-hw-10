export function createListCountry(item) {
  const {
    name: { official },
    flags: { svg },
  } = item;
  return `
  <li class="list-country">
  <img width="30" height="30" src="${svg}" />
    <p class="text-country">${official}</p>
  </li>
    `;
}
