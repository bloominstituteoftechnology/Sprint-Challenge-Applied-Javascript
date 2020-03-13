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
    const divHeaderMake=
        document.createElement('div');
    const spanDateMake=
        document.createElement('span');
    const h1Make=
        document.createElement('h1')
    const spanTempMake=
        document.createElement('span')
    divHeaderMake.append(spanDateMake);
    divHeaderMake.append(h1Make);
    divHeaderMake.append(spanTempMake);
    divHeaderMake.classList.add('header');
    spanDateMake.classList.add('date');
    spanTempMake.classList.add('temp');
    spanDateMake.textContent=('SMarch 28, 2019');
    h1Make.textContent=('Lambda Times');
    spanTempMake.textContent=('98°');
    return divHeaderMake;
    }
document.querySelector('.header-container').append(Header());