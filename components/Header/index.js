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

function Header() {
  const header = document.createElement("div");
  header.classList.add("header");
  const span = document.createElement("span");
  span.classList.add("date");
  span.textContent = "SMARCH 28, 2019";
  const h1 = document.createElement("h1");
  h1.textContent = "Lambda Times";
  const span1 = document.createElement("span");
  span1.classList.add("temp");
  span1.textContent = "98°";

  return header;
}

let container = document.querySelector(".header-container");

container.appendChild();

//// we can create a function so we dont have to D.R.Y. our codeb

// function buttonCreator(){
//     let button = document.createElement('button');
//     button.textContent ='THIS IS A BUTTON COMPONTENT';
//     button.classList.add('button');
//     button.classList.add('large-button');
//     button.forEach ( b  => {
//     b.addEventListener('click', (event) => {
//     alert("The button click says: ${event.target.textContent}")
//        })
//   // to get the data out of the function the only way to do that is to return it. Return is the gatekeeper.
//    return button
//     }
//   // now we have to call the function. To do that we need to snag what the function returns.
//    const button buttonCreator();
//    // final thing we need to do to add it to our screen is put it in our container.
//    let container = document.querySelector('.container');

//     container.appendChild(button
