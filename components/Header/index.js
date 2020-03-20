// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(object) {

    const header = document.createElement('div');
    const date = document.createElement('span');
    const lambdaTime = document.createElement('h1');
    const temp = document.createElement('span');


    header.classList.add('header');
    date.classList.add('date');
    lambdaTime.classList.add('h1');
    temp.classList.add('temp');


    date.textContent = "SMARCH 28, 2019";
    lambdaTime.textContent = "Lambda Times";
    temp.textContent = "98°";

    header.appendChild(date);
    header.appendChild(lambdaTime);
    header.appendChild(temp);

    return header;

}

let headers = document.querySelector(".header-container");


headers.appendChild(Header("SMARCH 28, 2019", "Lambda Times", "98°"));
















// let articleToggle = (item) => {
//     article.classList.toggle('article-open');

// }


// button.addEventListener('click', articleToggle);



// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then(response => {
//         let myCard = cardCreator(response.data)
//         newCard.appendChild(myCard)
//         console.log(myCard);
//     })
//     .catch(error => {

//     });
