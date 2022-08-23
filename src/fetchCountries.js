import Notiflix from 'notiflix';
import { clearHTMLList, infoCountry, fetchAnyCountries } from './index';
export async function fetchCountries(name) {
  const getFetch = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,currencies,languages,population,flags`
  );
  const response = await getFetch.json();
  return response;
}

export async function getDataCountries(name) {
  try {
    await fetchCountries(name).then(res => {
      clearHTMLList();
      if (res.length > 10) {
        return Notiflix.Notify.info(
          '"Too many matches found. Please enter a more specific name."'
        );
      }
      if (res.length === 1) return infoCountry(res);
      if (res.length > 1) return fetchAnyCountries(res);
    });
  } catch (error) {
    Notiflix.Notify.failure('Oops, there is no country with that name');
    console.log(error);
  }
}
//

// =============================
// export function fetchCountries(name) {
//   return fetch(
//     `https://restcountries.com/v3.1/name/${name}?fields=name,capital,currencies,languages,population,flags`
//   )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(data => {
//       if (data.length > 10) {
//         Notiflix.Notify.info(
//           '"Too many matches found. Please enter a more specific name."'
//         );
//         return [];
//       }
//       return data;
//     })
//     .catch(error => {
//       Notiflix.Notify.failure('Oops, there is no country with that name');
//       console.log(error);
//       return [];
//     });
// }
