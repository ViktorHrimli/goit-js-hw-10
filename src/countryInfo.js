export function createCountryInfo(country) {
  const {
    name: { official },
    flags: { svg },
    languages,
    capital,
    population,
  } = country[0];
  const value = Object.values(languages);
  return ` <div class="conteiner">
  <img width="50" height="50" src="${svg}" alt="${official}" />
      <h2 class="country__text--head">${official}</h2>
      </div>
      <ul>
        <li>
           <p><b>Capital:</b> ${capital}</p>
        </li>
          <li>
           <p><b>Population:</b> ${population}</p>
        </li>
          <li>
           <p><b>Languages:</b> ${value}</p>
        </li>
      </ul>
      `;
}
