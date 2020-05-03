const cardsContainer = document.querySelector(".cards-container");
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(function (response) {
    // handle success
    let responseVar1 = response.data.articles;
    for (topic in responseVar1) {
      responseVar1[topic].forEach((item) => {
        cardsContainer.appendChild(newCards(item));
      });
    }

    console.log("Response Var", responseVar1);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
//Created a function for the cards component
// This function is a template for the new cards that will be appended
function newCards(object) {
  const card = document.createElement("div");
  card.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = `${object.headline}`;

  const author = document.createElement("div");
  author.classList.add("author");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const img = document.createElement("img");
  img.src = `${object.authorPhoto}`;

  const madeBy = document.createElement("span");
  madeBy.textContent = `${object.authorName}`;

  //Appended
  imgContainer.appendChild(img);
  author.appendChild(madeBy);
  author.appendChild(imgContainer);
  card.appendChild(headline);
  card.appendChild(author);
  return card;
}
