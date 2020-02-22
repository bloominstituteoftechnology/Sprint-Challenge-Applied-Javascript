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

const headerComponent = () => {
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header");

  const headerSpan = document.createElement("span");
  headerSpan.classList.add("date");
  headerSpan.textContent = "Smarch 28, 2019";
  headerContainer.appendChild(headerSpan);

  const headerH = document.createElement("h1");
  headerH.textContent = "Lambda Times";
  headerContainer.appendChild(headerH);

  const secondSpan = document.createElement("span");
  secondSpan.classList.add("temp");
  secondSpan.textContent = "98";
  headerContainer.appendChild(secondSpan);

  return headerContainer;
};

const headCon = document.querySelector(".header-container");
headCon.appendChild(headerComponent());
