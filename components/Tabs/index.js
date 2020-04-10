// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


console.log(axios);
const tabs = document.querySelector('.tabs')
console.log(tabs);

// axios.get('https://lambda-times-backend.herokuapp.com/topics')
// .then(
//   response =>{
//     console.log(response.data)
//   }
// )
// .catch(
//   error =>{ 
//     console.log(error);
//   }
// )

function makeTabs (tabToAdd){
    const tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = tabToAdd

    tabs.appendChild(tab)

    return tabToAdd
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(
  response =>{
    //   console.log(response.data)
    const tabData = response.data.topics
    console.log(tabData.topics)
    tabData.forEach((tabName) => {
        makeTabs(tabName);
    })

  }
)
.catch(
  error =>{ 
    console.log(error);
  }
)
