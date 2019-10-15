const form = document.querySelector("#squeak-form");

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const message = document.querySelector("#message").value;

  const squeak = document.createElement("div");
  squeak.classList.add("squeak");

  const squeakUsername = document.createElement("p");
  squeakUsername.classList.add("squeak-username");
  squeakUsername.innerText = name;
  squeak.appendChild(squeakUsername);

  const squeakMessage = document.createElement("p");
  squeakMessage.classList.add("squeak-message");
  squeakMessage.innerText = message;
  squeak.appendChild(squeakMessage);

  document.querySelector("#all-squeaks").appendChild(squeak);

  window.scrollTo( 0, document.body.scrollHeight );
});