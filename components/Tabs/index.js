// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function tabComponent(data) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = data;
    return tab;
  }

let topics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(function (response) {
    console.log(response);
    let topicsArray = response.data.topics;
    topicsArray.forEach(element => {
    topics.appendChild(tabComponent(element))
    })
  })
  .catch(function (error) {
    console.log(error);
  });


  
 
  

