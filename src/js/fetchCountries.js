export default function fetchCountries(name) {
  const baseUrl = 'https://restcountries.com/v2/name/';
  const searchUrl = '?fields=name,capital,population,flags,languages';
  const response = fetch(`${baseUrl}${name}${searchUrl}`)
    .then(data => {
      return data.json();

      // console.log(data.json());
    })
    .catch(error => console.log(error));
  return response;
}
