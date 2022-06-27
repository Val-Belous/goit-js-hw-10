import './css/styles.css';
import Notiflix from 'notiflix';
import createMarkup from './js/markup';
import fetchCountries from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');

input.addEventListener('input', handlerInput);

function handlerInput(evt) {
  const lol = evt.target.value;
  //   console.log(value);
  if (lol === '') {
    return;
  }

  fetchCountries(lol).then(response => {
    console.log(response);
    console.log(createMarkup);
    createMarkup(response);
  });
}
