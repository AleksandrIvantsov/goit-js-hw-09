import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', onButtonSubmitClick);
console.log(form);

function onButtonSubmitClick(event) {
  event.preventDefault();
  // for (let i = 1; i < clients.length; i += 1) {
  //   console.log(clients[i]);
  // }
  console.log(event);
}

// function createPromise(position, delay) {

//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;

//     if (shouldResolve) {
//       // Fulfill
//     } else {
//       // Reject
//     }
//   });
// }
