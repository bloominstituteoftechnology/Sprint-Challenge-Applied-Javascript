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

data = [
    {
        date: 'SMARCH 28, 2019',
        h1: 'Lambda Times',
        temp: '98º'
    }
]

//Add the function to the component given, to .header-container
const aHeader = document.querySelector('.header-container')

console.log(aHeader)

data.map(item => {
    console.log('item: ', item);
    aHeader.appendChild(Header(item))
})


function Header(arg) {
    //create class elements 
    const head = document.createElement('div')
    const headerDate = document.createElement('span')
    const h1 = document.createElement('h1')
    const temperature = document.createElement('span')

    //create class lists 
    head.classList.add('header')
    head.classList.add('date')
    head.classList.add('temp')

    //append children 
    head.appendChild(headerDate)
    head.appendChild(h1)
    head.appendChild(temperature)

    //set textContent
    headerDate.textContent = arg.date
    h1.textContent = arg.h1
    temperature.textContent = arg.temp

    return head

}
