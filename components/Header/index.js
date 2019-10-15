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

const headerCont = document.querySelector('.header-container');
console.log(headerCont); 
const component = Header();
headerCont.appendChild(component);

function Header() {  //function that will hold the component//
    
    const header = document.createElement('div'); //created variable and set that equal to the created of the div element//
    header.classList.add('header'); //now you can use the variable you created and add a class to what the variable equals which is a created div//


    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = "SMARCH 28, 2019";
    header.appendChild(date);

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = "98°";
    header.appendChild(temp);

    return header;
}