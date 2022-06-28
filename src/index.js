import './css/styles.css';
import Notiflix from 'notiflix';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';
import { createMarkup, countryList, countryInfo } from './js/markup';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');

input.addEventListener('input', debounce(handlerInput, DEBOUNCE_DELAY));

function handlerInput(evt) {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  const lol = evt.target.value;
  //   console.log(value);
  if (lol === '') {
    return;
  }

  fetchCountries(lol).then(response => {
    // console.log(response);
    // console.log(createMarkup);
    createMarkup(response);
  });
}
