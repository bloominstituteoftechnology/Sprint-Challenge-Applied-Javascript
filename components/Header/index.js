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
    const temp = document.createElement('temp');


    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    lambdaTime.textContent = object.lambdaTime;
    date.textContent = object.location;
    temp.textContent = object.temp;

    header.appendChild(date);
    header.appendChild(lambdaTime);
    header.appendChild(temp);

    return header;

}
let newCard = document.querySelector(".header-container");

function newCards(array) {
    array.forEach(item => {
        axios.get('https://lambda-times-backend.herokuapp.com/${item}')
            .then(response => {
                let myCard = Header(response.data)

                newCard.append(myCard);
            });
    })
}


// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then(response => {
//         let myCard = cardCreator(response.data)
//         newCard.appendChild(myCard)
//         console.log(myCard);
//     })
//     .catch(error => {

//     });
