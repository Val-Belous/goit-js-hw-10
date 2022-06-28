import Notiflix from 'notiflix';

export default function fetchCountries(name) {
  const baseUrl = 'https://restcountries.com/v2/name/';
  const response = fetch(`${baseUrl}${name}`)
    .then(data => {
      if (!data.ok) {
        // console.log(data);
        throw new Error(error);
      }
      return data.json();
      // console.log(data.json());
    })
    .catch(() =>
      Notiflix.Notify.failure('Oops, there is no country with that name')
    );
  return response;
}
