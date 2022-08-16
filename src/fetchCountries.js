import Notiflix from 'notiflix';
export function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {
      if (!response.ok) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        return [];
      }
      return response.json();
    })
    .then(data => {
      if (data.length > 10) {
        Notiflix.Notify.info(
          '"Too many matches found. Please enter a more specific name."'
        );
        return [];
      }
      return data;
    })
    .catch(error => {
      error;
    });
}
