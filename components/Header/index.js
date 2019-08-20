// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    let divHead = document.createElement('div')
    divHead.classList.add('header')

    let date = document.createElement('span')
    date.classList.add('date')
    date.textContent = 'Date: 28 March 2019'
    divHead.appendChild(date)

    let h1 = document.createElement('h1')
    h1.classList.add('h1')
    h1.textContent = 'Lambda Times'
    divHead.appendChild(h1)

    let spanTemp = document.createElement('span')
    spanTemp.textContent = 'Temp: 98°'
    divHead.appendChild(spanTemp)

    return divHead
}

document.querySelector('.header-container').appendChild(Header())

// function Header() {

//     let div = document.createElement("div");
//     div.classList.add("header");

//     let span = document.createElement("span");
//     span.classList.add("date");
//     span.innerHTML = "Smarch 28, 2019";
//     div.appendChild(span);

//     let h1 = document.createElement("h1");
//     h1.innerHTML = "Lambda Times";
//     div.appendChild(h1);

//     let span2 = document.createElement("span");
//     span2.classList.add("temp");
//     span2.innerHTML = "98°";
//     div.appendChild(span2);

//     return div;

// }

// document.querySelector(".header-container").appendChild(Header());