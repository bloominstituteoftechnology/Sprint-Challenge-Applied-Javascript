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

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());
//these need to go outside of the function because the function only returns one thing 
//three steps: 1. make the function 2. select where on the page where we're going to put the element 3. 

function Header(item) {
    //1. create elements - document.createElement()
    const header = document.createElement('div');
    const date = document.createElement('span');
    const h1 = document.createElement('h1');
    const temp = document.createElement('span');
          
    //2. .textContent
    date.textContent = `SMARCH 28, 2019`;
    h1.textContent = `Lambda Times`;
    temp.textContent = `98°`;

    //3. .classList.add()
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //4. .appendChildren()
    header.appendChild(date);
    header.appendChild(h1);
    header.appendChild(temp);

    //notes for the future, this appending NEEDS to happen in the function and then called outside. Different from the API exercises because we were defining outside the API and the function, but then calling inside the .then(). The appending needs to happen inside a method. 

    return header

}

// console.log(Header());
