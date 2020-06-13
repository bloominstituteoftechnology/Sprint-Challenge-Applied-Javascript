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


function getLocation(cb) {
    if (navigator.geolocation) {
      
      navigator.geolocation.getCurrentPosition(cb)
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

getLocation(getWeather) 



async function getWeather(loc){
 
  const {latitude,longitude} = loc.coords
 
const weatherReq = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=32ebe13fb53199fdd11e40f59550a26c&units=imperial`)
const response = await weatherReq.data

const temp = await response.main.temp.toFixed(0)
const tempRender = document.querySelector('#temp')
tempRender.textContent = temp + '°' || '98°'

}



function Header() {
    
const header = document.createElement('div')
header.classList = 'header'
header.innerHTML += `
            <span class="date">${Date.today().toString("MMMM dS, yyyy")}</span>
            
            <h1>Lambda Times</h1>
            <span id="temp" class="temp animate__animated animate__bounce"></span>
`
return header
}

const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(Header())