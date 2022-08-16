export function createCountryInfo(common, svg, languages, capital, population) {
  return ` <div class="conteiner">
  <img width="50" height="50" src="${svg}" alt="${common}" />
      <h2 class="country__text--head">${common}</h2>
      </div>
      <ul>
        <li>
           <p><b>Capital:</b> ${capital}</p>
        </li>
          <li>
           <p><b>Population:</b> ${population}</p>
        </li>
          <li>
           <p><b>Languages:</b> ${languages}</p>
        </li>
      </ul>
      `;
}
