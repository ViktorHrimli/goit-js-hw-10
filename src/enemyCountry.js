export function enemyCountry(official, svg, languages, capital, population) {
  return ` <div class="conteiner">
  <img width="50" height="50" src="https://upload.wikimedia.org/wikipedia/commons/c/c5/MoscowPride.jpg" alt="" />
      <h2 class="country__text--head">Дніпропетровська область</h2>
      </div>
      <ul>
        <li>
           <p><b>Capital:</b>${capital} це Україна</p>
        </li>
          <li>
           <p><b>Population:</b>${population} поїхали до сибіру</p>
        </li>
          <li>
           <p><b>Languages:</b>незабаром українська</p>
        </li>
      </ul>
      `;
}
