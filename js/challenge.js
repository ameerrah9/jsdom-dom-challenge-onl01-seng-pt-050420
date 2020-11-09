const input = document.querySelector('input');

function addingEventListener() {
  input.addEventListener('click', function(event) {
    return "clicked"
  });
}

const count = document.querySelector('counter');
const minus = document.querySelector('minus');
const plus = document.querySelector('plus');

function addingEventListener() {
    plus.addEventListener('click', function(event) {
      count++
    });
  }

function addingEventListener() {
    minus.addEventListener('click', function(event) {
      count--
    });
  }  

//   let articleHearts = document.querySelectorAll(".like-glyph");

//   function likeCallback(e) {
//     let heart = e.target;
//     mimicServerCall()
//       .then(function(serverMessage){
//         heart.innerText = glyphStates[heart.innerText];
//         heart.style.color = colorStates[heart.style.color];
//       })
//       .catch(function(error) {
//         alert("Something went wrong!");
//       });
//   }

//   for (let glyph of articleHearts) {
//     glyph.addEventListener("click", likeCallback);
//   }
