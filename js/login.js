let loggedIn = false;
let loginText = document.querySelector('#login');
let loginBG = document.querySelector('.login-bg');
let loginForm = document.querySelector('.login-form');
let loginButton = document.querySelector('#submit');

loginText.addEventListener('click', () => {

  if (!loggedIn) {

    showLogin();

  }

  else {

    loggedIn = false;
    loginText.textContent = "LOG IN";

  }

});

loginBG.addEventListener('click', event => {

  if (event.target.classList.contains('login-bg')) {

    hideLogin();

  }

});

loginButton.addEventListener('click', event => {

  event.preventDefault();
  loggedIn = true;
  loginText.textContent = document.querySelector('#username-input').value;
  hideLogin();

});

function hideLogin() {

  TweenMax.to(loginForm, 1, {yPercent: -200, opacity: 0, onComplete: () => {
    loginForm.style.display = "none";

    TweenMax.to(loginBG, 1, {opacity: 0, onComplete: () => {
      loginBG.style.display = "none";
      document.querySelector('body').style.overflow = "scroll";
      document.removeEventListener('wheel', preventDefault);
      document.removeEventListener('keydown', handleKeyboard);
    }});

  }});

}

function showLogin() {

  TweenMax.fromTo(loginBG, 1, {opacity: 0, display: "block"}, {opacity: 0.8, onComplete: () => {
    TweenMax.fromTo(loginForm, 1, {yPercent: -200, opacity: 0, display: "block"}, {yPercent: -50, opacity: 1});
  }});

  document.querySelector('body').style.overflow = "hidden";

  document.addEventListener('wheel', preventDefault);

  document.addEventListener('keydown', handleKeyboard);

}

function preventDefault(event) {
  event.preventDefault();
}

function handleKeyboard(event) {

  if (event.key.includes('Arrow'))
    event.preventDefault();

}
