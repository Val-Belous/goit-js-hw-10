import Notiflix from 'notiflix';

const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

export default function createMarkup(arr) {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  if (arr.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  } else if (arr.length >= 2) {
    listOfCountry(arr);
    //   function
    //   Если бэкенд вернул от 2-х до 10-х стран, под тестовым полем отображается список найденных стран. Каждый элемент списка состоит из флага и имени страны.
  } else {
    oneCountry(arr);
    //  function
    //   Если результат запроса это массив с одной страной, в интерфейсе отображается разметка карточки с данными о стране: флаг, название, столица, население и языки.
  }
}

function listOfCountry(arr) {
  const createList = arr
    .map(elem => {
      return `<li class="country-list__item"><img src="${elem.flags.svg}" alt="${elem.name}" width="150"><h2>${elem.name}</h2></li>`;
    })
    .join('');

  countryList.innerHTML = createList;
}

function oneCountry(arr) {
  const country = `
<img src="${arr[0].flags.svg}" alt="${arr[0].name}" width="60">
<h2>${arr[0].name}</h2>
<p>Capital: <span>${arr[0].capital}</span></p>
<p>Population: <span>${arr[0].population}</span></p>
<p>Languages: <span>${arr[0].languages
    .map(item => item.name)
    .join(' ,')}</span></p>`;
  countryInfo.innerHTML = country;
}
