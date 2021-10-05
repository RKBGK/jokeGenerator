import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import jokeData from './helpers/jokeData';
// import startApp from './views/startApp';

const init = () => {
  document.querySelector('#app').innerHTML += `  
  <button type="submit" id="getJoke" class="btn btn-primary">Get a joke</button>`;
};
let joke = '';
let punchline = '';
document.querySelector('#app').addEventListener('click', (e) => {
  if (e.target.id.includes('getJoke') || e.target.id.includes('getnewJoke')) {
    jokeData().then((jokeObj) => {
      joke = jokeObj.setup;
      punchline = jokeObj.delivery;
      console.warn(joke, punchline);
      document.querySelector('#app').innerHTML = '';
      document.querySelector('#app').innerHTML += `<div>${joke}</div>
      <div> <button type="submit" id="getpunchline" class="btn btn-primary">Get punch Line</button></div>`;
    });
  }
  if (e.target.id.includes('getpunchline')) {
    document.querySelector('#app').innerHTML = '';
    document.querySelector('#app').innerHTML += `<div>${joke}</div>
    <div>${punchline}</div>
    <div> <button type="submit" id="getnewJoke" class="btn btn-primary">Get new joke</button></div>`;
  }
});

init();
