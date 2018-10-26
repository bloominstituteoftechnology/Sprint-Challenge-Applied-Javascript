let writeButton = document.querySelector('#write-article');
let formBG = document.querySelector('.add-article .form-bg');
let writeForm = document.querySelector('.add-article .form');
let categories = ['all', 'javascript', 'technology', 'node', 'jquery', 'bootstrap', 'chinese food'];
let articleSubmit = document.querySelector('#add-submit');

writeButton.addEventListener('click', () => {

  showWriter();
  articleSubmit.parentNode.reset();

});

formBG.addEventListener('click', event => {

  if (event.target.classList.contains('form-bg')) {

    hideWriter();

  }

});

articleSubmit.addEventListener('click', event => {

  let articleName = document.querySelector('#title-input').value;
  let articleCategory = document.querySelector('#category-input').value;

  if (articleName != "" && articleCategory != "") {

    event.preventDefault();

    let card = createArticle(articleName, articleCategory, loginText.textContent);

    if (categories.indexOf(articleCategory) == -1) {

      createTab(articleCategory);
      categories.push(articleCategory);

    }

    tabs.addCard(card, articleCategory);

    document.querySelector('.cards-container').appendChild(card);

    event.target.parentNode.reset();

  }

});

function showWriter() {

  TweenMax.fromTo(formBG, 1, {opacity: 0, display: "block"}, {opacity: 0.8, onComplete: () => {
    TweenMax.fromTo(writeForm, 1, {yPercent: -200, opacity: 0, display: "block"}, {yPercent: -50, opacity: 1});
  }});

  document.querySelector('body').style.overflow = "hidden";

  document.addEventListener('wheel', preventDefault);

  document.addEventListener('keydown', handleKeyboard);

}

function hideWriter() {

  TweenMax.to(writeForm, 1, {yPercent: -200, opacity: 0, onComplete: () => {
    writeForm.style.display = "none";

    TweenMax.to(formBG, 1, {opacity: 0, onComplete: () => {
      formBG.style.display = "none";
      document.querySelector('body').style.overflow = "scroll";
      document.removeEventListener('wheel', preventDefault);
      document.removeEventListener('keydown', handleKeyboard);
    }});

  }});

}

function createArticle(title, category, author) {

  // Create elements

  let newArticle = document.createElement('div');
  let headline = document.createElement('div');
  let authorTag = document.createElement('div');
  let imgContainer = document.createElement('div');
  let img = document.createElement('img');
  let byTag = document.createElement('span');

  // Add element classes

  newArticle.classList.add('card');
  headline.classList.add('headline');
  authorTag.classList.add('author');
  imgContainer.classList.add('img-container');

  // Set attributes

  newArticle.setAttribute('data-tab', category);
  img.setAttribute('src', './assets/bones.jpg');

  // Populate elements

  headline.textContent = title;
  byTag.textContent = author;

  // Nest everything correctly

  newArticle.appendChild(headline);
  newArticle.appendChild(authorTag);
  authorTag.appendChild(imgContainer);
  imgContainer.appendChild(img);
  authorTag.appendChild(byTag);

  return newArticle;

}

function createTab(category) {

  let newTab = document.createElement('div');
  newTab.setAttribute('data-tab', category);
  newTab.classList.add('tab');
  newTab.textContent = category.toUpperCase();

  document.querySelector('.topics').appendChild(newTab);
  tabs.addTab(new TabLink(newTab));

}

function preventDefault(event) {
  event.preventDefault();
}

function handleKeyboard(event) {

  if (event.key.includes('Arrow'))
    event.preventDefault();

  if (event.key == "Escape") {

    hideWriter();
    hideLogin();

  }

}
