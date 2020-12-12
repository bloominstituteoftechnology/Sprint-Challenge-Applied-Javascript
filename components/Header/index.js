log = console.log;



// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
     
    const headContainer = document.querySelector("div.header-container");
    //console.log(headCountainer);
    
    //create elements
    const  div  = document.createElement('div');
    const span1 = document.createElement('span');
    const hOne  = document.createElement('h1');
    const span2 = document.createElement('span');
    
    //add classes
    div.classList.add('header');
    span1.classList.add('date');
    span2.classList.add('temp');

      //create inner text
      span1.innerText = "MARCH 28, 2019";
      hOne.innerText  = "Lambda Times";
      span2.innerText = "98°";

        //append builder
        div.headContainer.appendChild('div');
        div.appendChild('span1');
        div.appendChild('hOne');
        div.appendChild('span2');
     
  return headContainer;
}

Header();

